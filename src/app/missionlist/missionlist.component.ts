import { Component } from '@angular/core';
import { SpaceXService } from '../network/space-x.service';
import { NgFor } from '@angular/common';
import { Router } from '@angular/router';
import { MissionLaunch } from '../models/mission';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card'; 

@Component({
  selector: 'app-missionlist',
  standalone: true,
  imports: [NgFor, MatButtonModule, MatCardModule],
  templateUrl: './missionlist.component.html',
  styleUrl: './missionlist.component.css'
})
export class MissionlistComponent {
  missionList: MissionLaunch[] = [];

  yearList: string[] = [
    '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013',
    '2014', '2015', '2016', '2017', '2018', '2019', '2020'
  ];

  constructor(private spaceXService: SpaceXService, private router: Router) { }

  
  ngOnInit() {
    this.spaceXService.getMissionList().subscribe((data: MissionLaunch[]) => {
      this.missionList = data;
    });
  }
  
  showListByYear(year: string) {
    this.spaceXService.getMissionListByYear(year).subscribe((data: MissionLaunch[]) => {
      this.missionList = data;
    });
  }

  showDetails(mission_flight_number: string) {
    this.router.navigate(['/missiondetails'], { state: { mission_flight_number: mission_flight_number } });
  }




}
