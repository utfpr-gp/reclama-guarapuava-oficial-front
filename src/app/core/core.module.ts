import {ErrorHandler, NgModule, Optional, SkipSelf} from '@angular/core';
import {throwIfAlreadyLoaded} from '../module.import.guard';
import {WINDOW_PROVIDERS} from './helper/window.helper';
import {ErrorhandlerInterceptor} from './interceptor/errorhandler.interceptor';
import {HttpClientModule} from '@angular/common/http';
import {CommonModule} from '@angular/common';
import {MatButtonModule, MatCardModule, MatDialogModule, MatGridListModule} from '@angular/material';

@NgModule({
  imports: [
    HttpClientModule,
    CommonModule,
    MatDialogModule,
    MatButtonModule,
    MatGridListModule,
    MatCardModule
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
