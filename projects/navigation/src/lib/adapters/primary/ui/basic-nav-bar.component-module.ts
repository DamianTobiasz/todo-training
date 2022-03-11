import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicNavBarComponent } from './basic-nav-bar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { AppRoutingModule } from 'src/app/app-routing.module';

@NgModule({
  imports: [
    AppRoutingModule,
    BsDropdownModule.forRoot(),
    CommonModule,
    BrowserAnimationsModule,
    CollapseModule.forRoot(),
  ],
  declarations: [BasicNavBarComponent],
  providers: [],
  exports: [BasicNavBarComponent],
})
export class BasicNavBarComponentModule {}
