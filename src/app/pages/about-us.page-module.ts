import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AboutUsPage } from './about-us.page';
import { OurTeamComponentModule } from 'projects/team/src/public-api';

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
  ],
  declarations: [AboutUsPage],
  providers: [],
  exports: [],
})
export class AboutUsPageModule {}
