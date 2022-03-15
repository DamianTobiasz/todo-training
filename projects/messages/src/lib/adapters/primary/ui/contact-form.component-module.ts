import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactFormComponent } from './contact-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FirebaseMessagesServiceModule } from '../../secondary/infrastructure/firebase-messages.service-module';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    FirebaseMessagesServiceModule,
  ],
  declarations: [ContactFormComponent],
  providers: [],
  exports: [ContactFormComponent],
})
export class ContactFormComponentModule {}
