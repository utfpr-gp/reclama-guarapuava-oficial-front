import {NgModule} from '@angular/core';

import {UserRoutingModule} from './user-routing.module';
import {SharedModule} from '../shared/shared.module';
import {HomeComponent} from './home/home.component';
import {OccurrencesComponent} from './occurrences/occurrences.component';
import {DashComponent} from './dash/dash.component';
import {OccurrenceDetailComponent} from './occurrence-detail/occurrence-detail.component';

@NgModule({
  imports: [
    SharedModule,
    UserRoutingModule
  ],
  declarations: [
    HomeComponent,
    OccurrencesComponent,
    DashComponent,
    OccurrenceDetailComponent,
  ]
})
export class UserModule {
}
