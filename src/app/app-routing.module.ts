import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageModule } from './pages/home.page-module';
import { AboutUsPageModule } from './pages/about-us.page-module';
import { EmployeeDetailsPageModule } from './pages/employee-details.page-module';
import { EmployeesPageModule } from './pages/employees.page-module';
import { OurTeamComponent } from 'projects/team/src/lib/adapters/primary/ui/our-team.component';
import { OurTeamComponentModule } from 'projects/team/src/public-api';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => HomePageModule,
  },
  {
    path: 'about-us',
    loadChildren: () => OurTeamComponentModule,
  },
  {
    path: 'pracownik',
    loadChildren: () => EmployeesPageModule,
  },
  {
    path: 'pracownik/:name',
    loadChildren: () => EmployeeDetailsPageModule,
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    HomePageModule,
    AboutUsPageModule,
    EmployeeDetailsPageModule,
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
