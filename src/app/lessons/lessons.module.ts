import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LessonsPage } from 'src/app/lessons/lessons-page.component';
import { CopticTransliterationPipe } from 'src/app/shared/pipes/coptic-transliteration.pipe';
import { LessonsPageRoutingModule } from 'src/app/lessons/lessons-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LessonsPageRoutingModule,
    CopticTransliterationPipe,
  ],
  declarations: [LessonsPage],
})
export class LessonsPageModule {}
