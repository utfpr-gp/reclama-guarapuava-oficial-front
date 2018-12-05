import {ErrorHandler, NgModule, Optional, SkipSelf} from '@angular/core';
import {throwIfAlreadyLoaded} from '../module.import.guard';
import {WINDOW_PROVIDERS} from './helper/window.helper';
import {ErrorhandlerInterceptor} from './interceptor/errorhandler.interceptor';
import {SharedModule} from '../shared/shared.module';
import {GenderService} from './data-service/gender.service';
import {CityService} from './data-service/city.service';
import {NeighborhoodService} from './data-service/neighborhood.service';
import {CategoryService} from './data-service/category.service';
import {ProblemService} from './data-service/problem.service';
import {OccurrenceService} from './data-service/occurrence.service';
import {UserService} from './data-service/user.service';
import {CommentService} from './data-service/comment.service';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [],
  providers: [
    WINDOW_PROVIDERS,
    GenderService,
    CityService,
    NeighborhoodService,
    CategoryService,
    ProblemService,
    UserService,
    OccurrenceService,
    CommentService,
    {provide: ErrorHandler, useClass: ErrorhandlerInterceptor},
  ]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
}
