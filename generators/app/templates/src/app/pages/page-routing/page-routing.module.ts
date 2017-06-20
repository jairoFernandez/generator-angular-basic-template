import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component'; 

const pagesRoutes: Routes = [
  { path: 'page', component: HomeComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(pagesRoutes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class PageRoutingModule { }
