import { WorkWithFitnessSeedComponent } from './work-with-fitness-seed/work-with-fitness-seed.component';
import { MeetFitnessSeedComponent } from './meet-fitness-seed/meet-fitness-seed.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ContactUsPageRoutingModule } from './contact-us-routing.module';

import { ContactUsPage } from './contact-us.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ContactUsPageRoutingModule
  ],
  declarations: [ContactUsPage, MeetFitnessSeedComponent, WorkWithFitnessSeedComponent],
  entryComponents: [
    MeetFitnessSeedComponent, WorkWithFitnessSeedComponent
  ]
})
export class ContactUsPageModule {}
