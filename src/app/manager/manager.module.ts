import {NgModule} from '@angular/core';

import {ManagerRoutingModule} from './manager-routing.module';
import {HomeComponent} from './home/home.component';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    ManagerRoutingModule
  ],
  declarations: [
    HomeComponent
  ]
})
export class ManagerModule {
}
