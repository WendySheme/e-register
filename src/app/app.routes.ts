import { Routes } from '@angular/router';
import { StudentDashboardComponent } from "./student-dashboard-component/student-dashboard-component.component";
import { TutorDashboardComponent } from "./tutor-dashboard-component/tutor-dashboard-component.component";


export const routes: Routes = [
  { path: 'tutor', component: TutorDashboardComponent },
  { path: 'student', component: StudentDashboardComponent },
  { path: '', redirectTo: '/tutor', pathMatch: 'full' } 
];