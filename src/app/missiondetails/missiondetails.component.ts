import { Component } from '@angular/core';
import { SpaceXService } from '../network/space-x.service';
import { Mission } from '../models/Mission';
import { NgIf } from '@angular/common';
import {MatCardModule} from '@angular/material/card'; 

@Component({
  selector: 'app-missiondetails',
  standalone: true,
  imports: [NgIf, MatCardModule],
  templateUrl: './missiondetails.component.html',
  styleUrl: './missiondetails.component.css'
})
export class MissiondetailsComponent {
  mission: Mission = {} as Mission;

  mission_flight_number = history.state.mission_flight_number

  constructor(private spaceXService: SpaceXService) { }

  ngOnInit() {
    this.spaceXService.getMissionListByFlightNumber(this.mission_flight_number).subscribe((data: Mission) => {
      this.mission = data;
    });
  }

}
