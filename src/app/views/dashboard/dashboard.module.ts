import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';


import { sharedModule } from 'src/app/modules/common/shared.module';
import { MaterialModule } from 'src/app/modules/material/material.module';
import { HomeComponent } from 'src/app/components/dashboard/home.component';


@NgModule({
  declarations: [DashboardComponent,HomeComponent],
  imports: [
    CommonModule,
    MaterialModule,
    sharedModule,
    DashboardRoutingModule,
  ],
  exports:[
    
  ]
})
export class DashboardModule { }
