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
      id: '1',
      name: 'Andrzej',
      imageUrl:
        'https://euro-kontakt.eu/wp-content/uploads/2020/04/pracownik-rolny.png.webp',
      bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod',
      department: {
        name: 'Wydział',
        employeeCount: 3,
      },
    },
    {
      id: '2',
      name: 'Halina',
      imageUrl:
        'https://www.greentalent.pl/media/1187/dsce_3629b.jpg?anchor=center&mode=crop&width=730&height=530&rnd=132899353090000000',
      bio: 'Tempor incididunt ut labore et dolore magna aliqua. Cras sed felis eget',
      department: {
        name: 'Wydział',
        employeeCount: 3,
      },
    },
    {
      id: '3',
      name: 'Marek',
      imageUrl:
        'https://filplast.pl/wp-content/uploads/2021/03/pracownik-produkcji.jpg',
      bio: 'velit. Nam at lectus urna duis convallis convallis tellus id. Eget aliquet',
      department: {
        name: 'Wydział',
        employeeCount: 3,
      },
    },
  ]);
}
