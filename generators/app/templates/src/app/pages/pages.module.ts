import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { PageRoutingModule } from './page-routing/page-routing.module';
import { StylesModule } from './../styles/styles.module';

@NgModule({
  imports: [
    CommonModule,
    StylesModule,
    PageRoutingModule
  ],
  exports: [
    HomeComponent
  ],
  declarations: [
    HomeComponent
  ]
})
export class PagesModule { }
