import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AboutUsPage } from './about-us.page';
import {
  FirebaseTeamMembersServiceModule,
  OurTeamComponentModule,
} from '@team';
import { EmployeeDetailComponentModule } from '../../../projects/team/src/lib/adapters/primary/ui/employee-detail.component-module';

@NgModule({
  imports: [
    CommonModule,
    OurTeamComponentModule,
    FirebaseTeamMembersServiceModule,
    RouterModule.forChild([
      {
        path: 'about-us',
        component: AboutUsPage,
      },
    ]),
    EmployeeDetailComponentModule,
  ],
  declarations: [AboutUsPage],
  providers: [],
  exports: [],
})
export class AboutUsPageModule {}
