import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { EmployeeDetailsPage } from './employee-details.page';
import {
  EmployeeDetailComponentModule,
  EmployeeIdResolverModule,
  FirebaseTeamMembersServiceModule,
} from '@team';
import { EmployeeIdResolver } from 'projects/team/src/lib/adapters/primary/ui/employee-id.resolver';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: ':employeeId',
        component: EmployeeDetailsPage,
        resolve: {
          employeeId: EmployeeIdResolver,
        },
      },
    ]),
    EmployeeDetailComponentModule,
    EmployeeIdResolverModule,
    FirebaseTeamMembersServiceModule,
  ],
  declarations: [EmployeeDetailsPage],
  providers: [],
  exports: [],
})
export class EmployeeDetailsPageModule {}
