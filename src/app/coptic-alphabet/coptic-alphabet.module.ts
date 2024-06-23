import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CopticAlphabetPage } from './coptic-alphabet.page';

import { CopticAlphabetPageRoutingModule } from './coptic-alphabet-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    CopticAlphabetPageRoutingModule
  ],
  declarations: [CopticAlphabetPage]
})
export class CopticAlphabetPageModule {}
