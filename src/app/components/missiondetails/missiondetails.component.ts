// src/app/components/missiondetails/missiondetails.component.ts

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpacexService } from '../../services/spacex.service';
import { Launch } from '../../models/launch';

@Component({
  selector: 'app-missiondetails',
  templateUrl: './missiondetails.component.html',
  styleUrls: ['./missiondetails.component.css'],
})
export class MissiondetailsComponent implements OnInit {
  missionDetails: Launch | undefined;

  constructor(
    private route: ActivatedRoute,
    private spacexService: SpacexService
  ) {}

  ngOnInit() {
    const flightNumber = Number(this.route.snapshot.paramMap.get('flight_number'));
    this.spacexService.getMissionDetails(flightNumber).subscribe((data) => {
      this.missionDetails = data;
    });
  }
}
