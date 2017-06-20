import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router'; 
import { RouterApp } from './router-app';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(RouterApp)
  ],
  exports: [
    RouterModule
  ],
  declarations: [
    PageNotFoundComponent
  ]
})
export class AppRoutingModule { }
