import { Routes } from '@angular/router';
import { MissionlistComponent } from './missionlist/missionlist.component';
import { MissiondetailsComponent } from './missiondetails/missiondetails.component';

export const routes: Routes = [

    { path: '', redirectTo: 'missionlist', pathMatch: 'full' },
    { path: 'missionlist', component: MissionlistComponent },
    { path: 'missiondetails', component: MissiondetailsComponent },
    { path: '**', redirectTo: 'missionlist'}



];
