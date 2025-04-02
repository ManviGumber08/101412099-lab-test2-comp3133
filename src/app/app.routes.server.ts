// src/app/app.routes.server.ts

import { Routes } from '@angular/router';
import { MissionlistComponent } from './missionlist/missionlist.component'; // Correct path
import { MissiondetailsComponent } from './components/missiondetails/missiondetails.component';

export const routes: Routes = [
  { path: '', component: MissionlistComponent },
  { path: 'mission-details/:flight_number', component: MissiondetailsComponent },
];
