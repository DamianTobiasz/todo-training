import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ContactPage } from './contact.page';
import { ContactComponentModule } from '@team';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: 'contact',
        component: ContactPage,
      },
    ]),
    ContactComponentModule,
  ],
  declarations: [ContactPage],
  providers: [],
  exports: [],
})
export class ContactPageModule {}
