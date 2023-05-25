import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactusRoutingModule } from './contactus-routing.module';
import { ContactusComponent } from './contactus.component';
import { ModalComponent } from './modal/modal.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ContactusComponent,
    ModalComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    ContactusRoutingModule
  ]
})
export class ContactusModule { }
