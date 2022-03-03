import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomePage } from './home.page';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { InsidePageModule } from './inside.page-module';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    BsDropdownModule.forRoot(),
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage,
        loadChildren: () => InsidePageModule,
      },
    ]),
  ],
  declarations: [HomePage],
  providers: [],
  exports: [],
})
export class HomePageModule {}
