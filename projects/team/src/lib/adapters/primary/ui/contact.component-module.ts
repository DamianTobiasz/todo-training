import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact.component';

@NgModule({
  imports: [CommonModule],
  declarations: [ContactComponent],
  providers: [],
  exports: [ContactComponent],
})
export class ContactComponentModule {}
