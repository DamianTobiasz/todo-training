import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { InsidePage } from './inside.page';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: 'inside',
        component: InsidePage,
      },
    ]),
  ],
  declarations: [InsidePage],
  providers: [],
  exports: [],
})
export class InsidePageModule {}
