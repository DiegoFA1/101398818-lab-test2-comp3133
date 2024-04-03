import { Component } from '@angular/core';
import { SpaceXService } from '../network/space-x.service';

@Component({
  selector: 'app-missiondetails',
  standalone: true,
  imports: [],
  templateUrl: './missiondetails.component.html',
  styleUrl: './missiondetails.component.css'
})
export class MissiondetailsComponent {
  mission: any;
  mission_flight_number = history.state.mission_flight_number

  constructor(private spaceXService: SpaceXService) { }

  ngOnInit() {
    this.spaceXService.getMissionListByFlightNumber(this.mission_flight_number).subscribe((data) => {
      this.mission = data;
    });
  }

}
