import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageModule } from './pages/home.page-module';
import { AboutUsPageModule } from './pages/about-us.page-module';
import { EmployeeDetailsPageModule } from './pages/employee-details.page-module';
import { EmployeesPageModule } from './pages/employees.page-module';
import { ContactPageModule } from './pages/contact.page-module';
import { ContactUsPageModule } from './pages/contact-us.page-module';
import { AdminPageModule } from './pages/admin.page-module';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => HomePageModule,
  },
  {
    path: 'admin',
    loadChildren: () => AdminPageModule,
  },
  {
    path: 'about-us',
    loadChildren: () => AboutUsPageModule,
  },
  {
    path: 'employees',
    loadChildren: () => EmployeesPageModule,
  },
  {
    path: 'contact',
    loadChildren: () => ContactPageModule,
  },
  {
    path: 'kontakt',
    loadChildren: () => ContactUsPageModule,
  },
  {
    path: 'pracownik',
    loadChildren: () => EmployeeDetailsPageModule,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
