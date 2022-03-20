import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  Inject,
} from '@angular/core';
import { Observable } from 'rxjs';

import {
  GetsAllTeamMemberDtoPort,
  GETS_ALL_TEAM_MEMBER_DTO,
} from '../../../application/ports/secondary/gets-all-team-member.dto-port';
import { TeamMemberDTO } from '../../../application/ports/secondary/team-member.dto';

@Component({
  selector: 'lib-our-team',
  templateUrl: './our-team.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OurTeamComponent {
  teamMembers$: Observable<TeamMemberDTO[]> =
    this._getsAllTeamMemberDto.getAll();

  constructor(
    @Inject(GETS_ALL_TEAM_MEMBER_DTO)
    private _getsAllTeamMemberDto: GetsAllTeamMemberDtoPort
  ) {}
}
