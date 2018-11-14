import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import {SharedModule} from '../shared/shared.module';
import { HomeComponent } from './home/home.component';
import { RegisterCategoryComponent } from './register-category/register-category.component';
import { DashComponent } from './dash/dash.component';
import { RegisterNeighborhoodComponent } from './register-neighborhood/register-neighborhood.component';

@NgModule({
  imports: [
    SharedModule,
    AdminRoutingModule
  ],
  declarations: [
    HomeComponent,
    RegisterCategoryComponent,
    DashComponent,
    RegisterNeighborhoodComponent
  ]
})
export class AdminModule { }
