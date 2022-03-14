import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageModule } from './pages/home.page-module';
import { AboutUsPageModule } from './pages/about-us.page-module';
import { EmployeeDetailsPageModule } from './pages/employee-details.page-module';
import { EmployeesPageModule } from './pages/employees.page-module';
import {
  FirebaseTeamMembersServiceModule,
  OurTeamComponentModule,
} from 'projects/team/src/public-api';
import { ContactPageModule } from './pages/contact.page-module';
import { ContactUsPageModule } from './pages/contact-us.page-module';

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
  {
    path: 'contact',
    loadChildren: () => ContactPageModule,
  },
  {
    path: 'kontakt',
    loadChildren: () => ContactUsPageModule,
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    HomePageModule,
    AboutUsPageModule,
    EmployeeDetailsPageModule,
    ContactPageModule,
    ContactUsPageModule,
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
