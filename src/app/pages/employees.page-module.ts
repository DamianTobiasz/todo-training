import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { EmployeesPage } from './employees.page';
import { OurTeamComponentModule } from 'projects/team/src/public-api';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: EmployeesPage,
      },
    ]),
    OurTeamComponentModule,
  ],
  declarations: [EmployeesPage],
  providers: [],
  exports: [],
})
export class EmployeesPageModule {}
