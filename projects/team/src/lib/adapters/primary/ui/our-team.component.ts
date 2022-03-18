import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  Inject,
} from '@angular/core';
import { inject } from '@angular/core/testing';
import { Observable } from 'rxjs';
import { CONTEXT_DTO_STORAGE } from '../../../application/ports/secondary/context-dto.storage-port';
import {
  GetsAllTeamMemberDtoPort,
  GETS_ALL_TEAM_MEMBER_DTO,
} from '../../../application/ports/secondary/gets-all-team-member.dto-port';
import { TeamMemberDTO } from '../../../application/ports/secondary/team-member.dto';
import { InMemoryContextStorage } from '../../secondary/infrastructure/in-memory-context.storage';

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
    private _getsAllTeamMemberDto: GetsAllTeamMemberDtoPort,
    @Inject(CONTEXT_DTO_STORAGE)
    private _contextDtoStoragePort: InMemoryContextStorage
  ) {}

  onTeamMemberClicked(teamMember: TeamMemberDTO): void {
    this._contextDtoStoragePort.next({ employeeId: teamMember.id });
  }
}
