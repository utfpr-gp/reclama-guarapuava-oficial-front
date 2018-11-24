import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {OccurrencesComponent} from './occurrences/occurrences.component';
import {DashComponent} from './dash/dash.component';
import {OccurrenceDetailComponent} from './occurrence-detail/occurrence-detail.component';
import {ProfileComponent} from './profile/profile.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent, children: [
      {path: 'dash', component: DashComponent},
      {
        path: 'occurrences', component: OccurrencesComponent, children: [
          {path: ':id', component: OccurrenceDetailComponent}
        ]
      },
      {path: 'profile', component: ProfileComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule {
}
