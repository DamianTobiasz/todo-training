import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AboutUsPage } from './about-us.page';
import {
  FirebaseTeamMembersServiceModule,
  OurTeamComponentModule,
} from '@team';

@NgModule({
  imports: [
    CommonModule,
    OurTeamComponentModule,
    FirebaseTeamMembersServiceModule,
    RouterModule.forChild([
      {
        path: '',
        component: AboutUsPage,
      },
    ]),
  ],
  declarations: [AboutUsPage],
  providers: [],
  exports: [],
})
export class AboutUsPageModule {}
