import { Injectable } from '@angular/core';
import { environment } from '../../environments/environments';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { catchError, Observable, pipe, retry } from 'rxjs';
import { throwError } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
private baseUrl = environment.apiUrl;

  constructor(private http :HttpClient) { }


private getHeaders(): HttpHeaders {
  const token = localStorage.getItem('authToken');

  return new HttpHeaders({
    'Content-Type': 'application/json',
    ...(token && { Authorization: `Bearer ${token}` })
  });
}


get<T> (endpoint:string, params?:HttpParams) : Observable<T> 
{
  return this.http.get<T>
  
  (`${this.baseUrl}${endpoint}` 
    ,
    { headers: this.getHeaders(), params, }) .pipe(retry(1))
      
    catchError(this.handleError);
      }
    
 put<T>(endpoint: string, data: any): Observable<T> {
  return this.http.put<T>(
    `${this.baseUrl}${endpoint}`,
    data,
    { headers: this.getHeaders() }
  ).pipe(catchError(this.handleError));
   //da rivedere
}
 
delete<T>(endpoint:string):Observable<T>
{
  return this.http.delete<T>(
    `${this.baseUrl}${endpoint}`,
    { headers: this.getHeaders() }
  ).pipe(catchError(this.handleError));
  //da rivedere
}


post<T>(endpoint: string, data: any): Observable<T> {
  return this.http.post<T>(
    `${this.baseUrl}${endpoint}`,
    data,
    { headers: this.getHeaders() }
  )
    }

  private handleError(error:any):Observable<never>
  {
  console.error('Errore API:', error)
  return throwError(() => error);
  }

  }












