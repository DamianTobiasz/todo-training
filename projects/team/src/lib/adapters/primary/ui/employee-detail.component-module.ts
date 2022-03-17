import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeDetailComponent } from './employee-detail.component';
import { ModalModule } from 'ngx-bootstrap/modal';

@NgModule({
  imports: [ModalModule.forRoot(), CommonModule],
  declarations: [EmployeeDetailComponent],
  providers: [],
  exports: [EmployeeDetailComponent],
})
export class EmployeeDetailComponentModule {}
