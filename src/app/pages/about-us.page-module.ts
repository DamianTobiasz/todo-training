import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AboutUsPage } from './about-us.page';

@NgModule({
  imports: [
    CommonModule,
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
