import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
} from '@angular/core';

@Component({
  selector: 'lib-home-page',
  templateUrl: './home.page.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [],
})
export class HomePage {
  imagesrc = {
    url: 'https://zasoby.ekologia.pl/artykulyNew/28014/xxl/shutterstock-556727587_800x600.jpg',
  };
}
