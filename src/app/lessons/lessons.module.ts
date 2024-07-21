import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LessonsPage } from 'src/app/lessons/lessons-page.component';
import { LessonsPageRoutingModule } from 'src/app/lessons/lessons-routing.module';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, LessonsPageRoutingModule],
  declarations: [LessonsPage],
})
export class LessonsPageModule {}
