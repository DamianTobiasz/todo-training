import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
} from '@angular/core';
import { of } from 'rxjs';

@Component({
  selector: 'lib-contact',
  templateUrl: './contact.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactComponent {
  contactInfo$ = of([
    {
      name: 'Władek',
      number: '999282123',
    },
    {
      name: 'Marian',
      number: '123123123',
    },
  ]);
}
