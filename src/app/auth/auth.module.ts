import {NgModule, Optional, SkipSelf} from '@angular/core';
import {CommonModule} from '@angular/common';
import {throwIfAlreadyLoaded} from '../module.import.guard';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: []
})
export class AuthModule {
  constructor(@Optional() @SkipSelf() parentModule: AuthModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
}
