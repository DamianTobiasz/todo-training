import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
} from '@angular/core';

@Component({
  selector: 'lib-about-us-page',
  templateUrl: './about-us.page.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutUsPage {
  imgSrc = [
    {
      name: 'Andrzej',
      url: 'https://euro-kontakt.eu/wp-content/uploads/2020/04/pracownik-rolny.png.webp',
    },
    {
      name: 'Halina',
      url: 'https://www.greentalent.pl/media/1187/dsce_3629b.jpg?anchor=center&mode=crop&width=730&height=530&rnd=132899353090000000',
    },
    {
      name: 'Marek',
      url: 'https://filplast.pl/wp-content/uploads/2021/03/pracownik-produkcji.jpg',
    },
  ];
}
