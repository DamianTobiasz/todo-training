import { FormGroup, FormControl } from '@angular/forms';
import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  Inject,
} from '@angular/core';
import {
  ADDS_TEAM_MEMBER_DTO,
  AddsTeamMemberDtoPort,
} from '../../../application/ports/secondary/adds-team-member.dto-port';

@Component({
  selector: 'lib-create-team-member',
  templateUrl: './create-team-member.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreateTeamMemberComponent {
  readonly createTeamMember: FormGroup = new FormGroup({
    id: new FormControl(),
    name: new FormControl(),
    imageUrl: new FormControl(),
    bio: new FormControl(),
    departmentName: new FormControl(),
    employeeCount: new FormControl(),
  });

  constructor(
    @Inject(ADDS_TEAM_MEMBER_DTO)
    private _addsTeamMemberDto: AddsTeamMemberDtoPort
  ) {}

  onCreateTeamMemberSubmited(createTeamMember: FormGroup): void {
    this._addsTeamMemberDto.add({
      id: createTeamMember.get('id').value,
      name: createTeamMember.get('name').value,
      imageUrl: createTeamMember.get('imageUrl').value,
      bio: createTeamMember.get('bio').value,
      department: {
        name: createTeamMember.get('departmentName').value,
        employeeCount: createTeamMember.get('employeeCount').value,
      },
    });
  }
}
