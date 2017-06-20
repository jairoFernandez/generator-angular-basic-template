import { AccordionModule, AlertModule } from 'ngx-bootstrap';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [
    CommonModule,
    AlertModule.forRoot()
  ],
  exports:[
    AlertModule
  ],
  declarations: []
})
export class StylesModule { }
