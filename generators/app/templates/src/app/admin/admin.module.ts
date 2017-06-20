import { AdminRoutingModule } from './admin-routing/admin-routing.module';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule
  ],
  declarations: [HomeComponent]
})
export class AdminModule { }
