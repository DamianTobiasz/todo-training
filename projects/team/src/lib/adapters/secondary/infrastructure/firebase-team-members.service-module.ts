import { NgModule } from '@angular/core';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { FirebaseTeamMembersService } from './firebase-team-members.service';
import { GETS_ALL_TEAM_MEMBER_DTO } from '../../../application/ports/secondary/gets-all-team-member.dto-port';

@NgModule({
  imports: [AngularFirestoreModule],
  declarations: [],
  providers: [
    FirebaseTeamMembersService,
    {
      provide: GETS_ALL_TEAM_MEMBER_DTO,
      useExisting: FirebaseTeamMembersService,
    },
  ],
  exports: [],
})
export class FirebaseTeamMembersServiceModule {}
