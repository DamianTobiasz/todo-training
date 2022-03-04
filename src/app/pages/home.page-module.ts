import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomePage } from './home.page';
import { InsidePageModule } from './inside.page-module';
import { AboutUsPageModule } from './about-us.page-module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage,
        loadChildren: () => InsidePageModule,
      },
      {
        path: '',
        component: HomePage,
        loadChildren: () => AboutUsPageModule,
      },
    ]),
  ],
  declarations: [HomePage],
  providers: [],
  exports: [],
})
export class HomePageModule {}
