import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CopticAlphabetPage } from './coptic-alphabet.page';

const routes: Routes = [
  {
    path: '',
    component: CopticAlphabetPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CopticAlphabetPageRoutingModule {}
