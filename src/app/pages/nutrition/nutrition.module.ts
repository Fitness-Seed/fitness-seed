import { TipsComponent } from './tips/tips.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NutritionPageRoutingModule } from './nutrition-routing.module';

import { NutritionPage } from './nutrition.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NutritionPageRoutingModule
  ],
  declarations: [NutritionPage, TipsComponent],
  entryComponents: [TipsComponent]
})
export class NutritionPageModule {}
