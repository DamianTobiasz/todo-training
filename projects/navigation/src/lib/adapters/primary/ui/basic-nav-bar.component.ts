import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
} from '@angular/core';
import { Observable, of } from 'rxjs';

import { BsDropdownConfig } from 'ngx-bootstrap/dropdown';
import { NavliteDTO } from '../../../application/ports/secondary/navlite.dto';

@Component({
  selector: 'lib-basic-nav-bar',
  templateUrl: './basic-nav-bar.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: BsDropdownConfig,
      useValue: { isAnimated: true, autoClose: true },
    },
  ],
})
export class BasicNavBarComponent {
  links$: Observable<NavliteDTO[]> = of([
    {
      link: '',
      name: 'Home',
    },
    {
      link: 'about-us',
      name: 'About us',
    },
    {
      link: 'contact',
      name: 'Contact',
    },
    {
      link: 'kontakt',
      name: 'Kontakt',
    },
  ]);
  isCollapsed = false;
}
