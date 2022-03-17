import { ActivatedRoute } from '@angular/router';
import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  Inject,
} from '@angular/core';
import { Observable } from 'rxjs';
import { TeamMemberDTO } from '../../../application/ports/secondary/team-member.dto';
import {
  GETS_ONE_TEAM_MEMBER_DTO,
  GetsOneTeamMemberDtoPort,
} from '../../../application/ports/secondary/gets-one-team-member.dto-port';

import { TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'lib-employee-detail',
  templateUrl: './employee-detail.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmployeeDetailComponent {
  teamMember$: Observable<TeamMemberDTO> = this._getsOneTeamMemberDto.getOne(
    this.activatedRoute.snapshot.params.employeeId
  );
  modalRef?: BsModalRef;

  constructor(
    private activatedRoute: ActivatedRoute,
    @Inject(GETS_ONE_TEAM_MEMBER_DTO)
    private _getsOneTeamMemberDto: GetsOneTeamMemberDtoPort,
    private modalService: BsModalService
  ) {}

  openModal(template: TemplateRef<any>): void {
    this.modalRef = this.modalService.show(template);
  }
}
