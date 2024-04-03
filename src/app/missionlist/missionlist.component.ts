import { Component } from '@angular/core';
import { SpaceXService } from '../network/space-x.service';
import { NgFor } from '@angular/common';
import { Router } from '@angular/router';
import { MissionLaunch } from '../models/Mission';

@Component({
  selector: 'app-missionlist',
  standalone: true,
  imports: [NgFor],
  templateUrl: './missionlist.component.html',
  styleUrl: './missionlist.component.css'
})
export class MissionlistComponent {
  missionList: MissionLaunch[] = [];

  constructor(private spaceXService: SpaceXService, private router: Router) { }

  
  ngOnInit() {
    this.spaceXService.getMissionList().subscribe((data: MissionLaunch[]) => {
      console.log('Data:', data);
      this.missionList = data;
    });
  }
  

  showDetails(mission_flight_number: string) {
    this.router.navigate(['/missiondetails'], { state: { mission_flight_number: mission_flight_number } });
  }




}
