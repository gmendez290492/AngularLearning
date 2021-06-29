import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from 'src/app/components/navbar/navbar.component';
import { MaterialModule } from '../material/material.module';
import { CardComponent } from 'src/app/components/common/card/card.component';



@NgModule({
  declarations: [
    NavbarComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports:[
    CommonModule,
    NavbarComponent,
    CardComponent
  ]
})
export class sharedModule { }
