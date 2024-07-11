import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LessonPageRoutingModule } from './lesson-routing.module';

import { LessonPage } from './lesson.page';
import { CopticTransliterationPipe } from 'src/app/shared/pipes/coptic-transliteration.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LessonPageRoutingModule,
    CopticTransliterationPipe,
  ],
  declarations: [LessonPage],
})
export class LessonPageModule {}
