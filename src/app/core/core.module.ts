import {ErrorHandler, NgModule, Optional, SkipSelf} from '@angular/core';
import {throwIfAlreadyLoaded} from '../module.import.guard';
import {WINDOW_PROVIDERS} from './helper/window.helper';
import {ErrorhandlerInterceptor} from './interceptor/errorhandler.interceptor';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [],
  providers: [
    WINDOW_PROVIDERS,
    {provide: ErrorHandler, useClass: ErrorhandlerInterceptor},
  ]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
}
