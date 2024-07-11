import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tab1',
        loadChildren: () =>
          import('../lesson/lesson.module').then((m) => m.LessonPageModule),
      },
      {
        path: 'tab2',
        loadChildren: () =>
          import('../coptic-alphabet/coptic-alphabet.module').then(
            (m) => m.CopticAlphabetPageModule,
          ),
      },
    ],
  },
  {
    path: '',
    redirectTo: '/tabs/tab2',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
