import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ApiResponse } from '../shared/model/api-response.interface';
import { ApiServiceService } from './api-service.service';
import { Router } from '@angular/router';
import { User, UserRole } from '../shared/model/user.interface';
import { catchError, Observable, pipe, retry } from 'rxjs'
import { tap } from 'rxjs/operators';
import { loginForm } from '../shared/model/form.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  private currentUser = new BehaviorSubject<null>(null);
  public currentUserSubject = this.currentUser.asObservable();
  private isAuthenticated = new BehaviorSubject<boolean>(false);
  public isAuthenticatedSubject = this.isAuthenticated.asObservable();

  constructor(
    private apiService: ApiServiceService,
     private router : Router) 
  {this.checkAuthStatus();

  } 


  login(loginForm: loginForm): Observable<ApiResponse<{ user: User; token: string }>> {
    return this.apiService.post<ApiResponse<{ user: User; token: string }>>('/auth/login', loginForm)
    .pipe(
        tap(response => {
          if (response.data)
          {
            this.setToken(response.data.token);
            this.setCurrentUser(response.data.user);
          }
      }),
      catchError(error => {
        console.error('Login error:', error);
        return throwError(() => error);
      })
    );
  }



 logout(): Observable<any> {
    return this.apiService.post('/auth/logout', {}).pipe(
      tap(() => {
        this.clearAuth();
        this.router.navigate(['/login']);
      }),

    );
  }

  refreshToken():Observable<ApiResponse<{ token:string}>>
  {
    return this.apiService.post<ApiResponse<{token: string}>>('/auth/refresh-token', {})
    .pipe(
      tap(Response => {
        if(Response.data)
           {
          this.setToken(Response.data.token);
         }
      })
    )
  
  }


changePassword(currentPassword:string, newPassword:string):Observable<ApiResponse>
{
return this.apiService.put<ApiResponse>('/auth/change-password', { currentPassword, newPassword })
}


private setToken(token: string): void
{
  localStorage.setItem('autToken', token);
}

private setCurrentUser(user: User):void
{
  this.currentUserSubject.(user);
  this.isAuthenticated.next(true);

  localStorage.setItem('currentUser', JSON.stringify(user));
}


private clearAuth():void
{
  localStorage.removeItem('autToken');
  localStorage.removeItem('currentUser');
  this.currentUser.next(null);
  this.isAuthenticated.next(false);

}


private checkAuthStatus(): void
{
const token = localStorage.getItem('authToken');
 const userStr= localStorage.getItem('currentUser');
  if(token && userStr)
  {
    try 
    {
      const user : User = JSON.parse(userStr);
      this.currentUser.next(user);
      this.isAuthenticated.next(true);

      this.getCurrentUser().subscribe({next :(User) =>{ 

        this.setCurrentUser(user)},

        error : () => {
          this.clearAuth();

        }
    })
    } 
    
    catch (error) {
      this.clearAuth();
    }
  }
}
  getToken(): string | null {
      return localStorage.getItem('authToken');
   }
    hasRole(role: UserRole): boolean
    {
      const user = this.currentUserSubject.value;
      return user ? user.roles.includes(role) : false;
    }
      isStudent():boolean
      {
      return this.hasRole(UserRole.STUDENT);
      }

      isTutor():boolean 
      {
        return this.hasRole(UserRole.TUTOR);
      }

      isAdmin(): boolean 
      {
       return this.hasRole(UserRole.ADMIN);
      }


  }
