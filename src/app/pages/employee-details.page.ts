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
export class EmployeeDetailsPage implements OnInit {
  constructor(private route: ActivatedRoute) {}
  name: '';

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.name = params.name;
    });
  }
}
