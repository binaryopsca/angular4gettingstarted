import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';

import { AboutComponent } from '../about/about.component';
import { HomeComponent } from '../home/home.component';
import { CardsampleComponent } from '../cardsample/cardsample.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'cardsample', component: CardsampleComponent },
  { path: 'about', component: AboutComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
