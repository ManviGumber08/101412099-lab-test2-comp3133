// app.routes.ts
import { Routes } from '@angular/router';
import { MissiondetailsComponent } from './components/missiondetails/missiondetails.component';

export const routes: Routes = [
  { path: 'mission/:id', component: MissiondetailsComponent }
];
