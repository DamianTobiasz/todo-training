import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { GetsAllTeamMemberDtoPort } from '../../../application/ports/secondary/gets-all-team-member.dto-port';
import { TeamMemberDTO } from '../../../application/ports/secondary/team-member.dto';
import { filterByCriterion } from '@lowgular/shared';
import { AddsTeamMemberDtoPort } from '../../../application/ports/secondary/adds-team-member.dto-port';
import { GetsOneTeamMemberDtoPort } from '../../../application/ports/secondary/gets-one-team-member.dto-port';

@Injectable()
export class FirebaseTeamMembersService
  implements
    GetsAllTeamMemberDtoPort,
    AddsTeamMemberDtoPort,
    GetsOneTeamMemberDtoPort
{
  constructor(private _client: AngularFirestore) {}

  getAll(criterion: Partial<TeamMemberDTO>): Observable<TeamMemberDTO[]> {
    return this._client
      .collection<TeamMemberDTO>('teamMembers')
      .valueChanges({ idField: 'id' })
      .pipe(map((data: TeamMemberDTO[]) => filterByCriterion(data, criterion)));
  }

  add(teamMember: Partial<TeamMemberDTO>): void {
    this._client.collection('teamMembers').add(teamMember);
  }

  getOne(id: string): Observable<TeamMemberDTO> {
    return this._client
      .doc<TeamMemberDTO>('teamMembers/' + id)
      .valueChanges({ idField: 'id' });
  }
}
