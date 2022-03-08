import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  OnInit,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'lib-employee-details-page',
  templateUrl: './employee-details.page.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmployeeDetailsPage {
  constructor(private activatedRoute: ActivatedRoute) {}
  params$ = this.activatedRoute.params;
}
