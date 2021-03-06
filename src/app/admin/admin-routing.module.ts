import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {RegisterCategoryComponent} from './register-category/register-category.component';
import {DashComponent} from './dash/dash.component';
import {RegisterNeighborhoodComponent} from './register-neighborhood/register-neighborhood.component';
import {RegisterProblemComponent} from './register-problem/register-problem.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent, children: [
      {path: 'dash', component: DashComponent},
      {path: 'category', component: RegisterCategoryComponent},
      {path: 'neighborhood', component: RegisterNeighborhoodComponent},
      {path: 'problems', component: RegisterProblemComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {
}
