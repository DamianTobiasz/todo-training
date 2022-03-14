import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomePage } from './home.page';
import {
  FirebaseTeamMembersServiceModule,
  OurTeamComponentModule,
} from '@team';

@NgModule({
  imports: [
    CommonModule,
    FirebaseTeamMembersServiceModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage,
      },
    ]),
    OurTeamComponentModule,
  ],
  declarations: [HomePage],
  providers: [],
  exports: [],
})
export class HomePageModule {}
