import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
} from '@angular/core';
import { Observable, of } from 'rxjs';
import { TeamMemberDTO } from '../../../application/ports/secondary/team-member.dto';

@Component({
  selector: 'lib-our-team',
  templateUrl: './our-team.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OurTeamComponent {
  teamMembers$: Observable<TeamMemberDTO[]> = of([
    {
      name: 'Andrzej',
      imageUrl:
        'https://euro-kontakt.eu/wp-content/uploads/2020/04/pracownik-rolny.png.webp',
    },
    {
      name: 'Halina',
      imageUrl:
        'https://www.greentalent.pl/media/1187/dsce_3629b.jpg?anchor=center&mode=crop&width=730&height=530&rnd=132899353090000000',
    },
    {
      name: 'Marek',
      imageUrl:
        'https://filplast.pl/wp-content/uploads/2021/03/pracownik-produkcji.jpg',
    },
  ]);
}
