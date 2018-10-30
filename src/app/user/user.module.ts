import {NgModule} from '@angular/core';

import {UserRoutingModule} from './user-routing.module';
import {SharedModule} from '../shared/shared.module';
import { HomeComponent } from './home/home.component';

@NgModule({
  imports: [
    SharedModule,
    UserRoutingModule
  ],
  declarations: [HomeComponent]
})
export class UserModule {
}
