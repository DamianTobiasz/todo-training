import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AboutUsPage } from './about-us.page';
import { OurTeamComponentModule } from 'projects/team/src/public-api';
import { EmployeeDetailComponentModule } from '../../../projects/team/src/lib/adapters/primary/ui/employee-detail.component-module';

@NgModule({
  imports: [
    CommonModule,
    OurTeamComponentModule,
    RouterModule.forChild([
      {
        path: 'about-us',
        component: AboutUsPage,
      },
    ]),
    EmployeeDetailComponentModule
  ],
  declarations: [AboutUsPage],
  providers: [],
  exports: [],
})
export class AboutUsPageModule {}
