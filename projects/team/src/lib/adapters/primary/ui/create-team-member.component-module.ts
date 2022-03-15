import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateTeamMemberComponent } from './create-team-member.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule],
  declarations: [CreateTeamMemberComponent],
  providers: [],
  exports: [CreateTeamMemberComponent],
})
export class CreateTeamMemberComponentModule {}
