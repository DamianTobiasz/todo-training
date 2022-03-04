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
    url: 'https://i.iplsc.com/wojna-o-norki-branza-kontra-ekolodzy/0009KQSKHLJY60HE-C122-F4.jpg',
  };
}
