import {NgModule, Optional, SkipSelf} from '@angular/core';
import {throwIfAlreadyLoaded} from '../module.import.guard';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {SharedModule} from '../shared/shared.module';
import {TokenInterceptor} from './interceptor/token.interceptor';
import {AuthAdminGuard} from './guard/auth.admin.guard';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [],
  providers: [
    AuthAdminGuard,
    {provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true}
  ]
})
export class AuthModule {
  constructor(@Optional() @SkipSelf() parentModule: AuthModule) {
    throwIfAlreadyLoaded(parentModule, 'AuthModule');
  }
}
