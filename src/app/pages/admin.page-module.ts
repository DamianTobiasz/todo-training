import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AdminPage } from './admin.page';
import { CreateTeamMemberComponentModule } from '../../../projects/team/src/lib/adapters/primary/ui/create-team-member.component-module';
import { FirebaseTeamMembersServiceModule } from '../../../projects/team/src/lib/adapters/secondary/infrastructure/firebase-team-members.service-module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: AdminPage,
      },
    ]),
    CreateTeamMemberComponentModule,
    FirebaseTeamMembersServiceModule
  ],
  declarations: [AdminPage],
  providers: [],
  exports: [],
})
export class AdminPageModule {}
