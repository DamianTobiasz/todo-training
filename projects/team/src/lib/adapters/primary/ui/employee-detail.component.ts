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
import { switchMap } from 'rxjs/operators';
import {
  CONTEXT_DTO_STORAGE,
  ContextDtoStoragePort,
} from '../../../application/ports/secondary/context-dto.storage-port';
import { ContextDTO } from '../../../application/ports/secondary/context.dto';

@Component({
  selector: 'lib-employee-detail',
  templateUrl: './employee-detail.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmployeeDetailComponent {
  modalRef?: BsModalRef;
  teamMember$: Observable<TeamMemberDTO> = this._contextDtoStoragePort
    .asObservable()
    .pipe(
      switchMap((data: ContextDTO) =>
        this._getsOneTeamMemberDto.getOne(data.employeeId)
      )
    );

  constructor(
    @Inject(GETS_ONE_TEAM_MEMBER_DTO)
    private _getsOneTeamMemberDto: GetsOneTeamMemberDtoPort,
    private modalService: BsModalService,
    @Inject(CONTEXT_DTO_STORAGE)
    private _contextDtoStoragePort: ContextDtoStoragePort
  ) {}

  openModal(template: TemplateRef<any>): void {
    this.modalRef = this.modalService.show(template);
  }
}
