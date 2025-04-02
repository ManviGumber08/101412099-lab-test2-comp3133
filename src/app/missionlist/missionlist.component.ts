// missionlist.component.ts (Standalone Component)

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';  // Import CommonModule

@Component({
  selector: 'app-missionlist',
  standalone: true,  // This marks the component as standalone
  templateUrl: './missionlist.component.html',
  styleUrls: ['./missionlist.component.css'],
  imports: [CommonModule],  // Import CommonModule here
})
export class MissionlistComponent {
  missions = [
    { id: 1, name: 'Mission One' },
    { id: 2, name: 'Mission Two' },
    { id: 3, name: 'Mission Three' }
  ];
}
