import {NgModule} from '@angular/core';
import {RouterModule, Routes, UrlSerializer} from '@angular/router';
import {AuthAdminGuard} from './auth/guard/auth.admin.guard';
import {HomeComponent} from './static-page/home/home.component';
import {SignInComponent} from './static-page/sign-in/sign-in.component';
import {SignUpComponent} from './static-page/sign-up/sign-up.component';
import {AuthManagerGuard} from './auth/guard/auth.manager.guard';
import {AuthUserGuard} from './auth/guard/auth.user.guard';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {
    path: 'auth', children: [
      {path: 'sign-in', component: SignInComponent},
      {path: 'sign-up', component: SignUpComponent},
    ]
  },
  {path: 'manager', loadChildren: './manager/manager.module#ManagerModule', canActivate: [AuthManagerGuard]},
  {path: 'admin', loadChildren: './admin/admin.module#AdminModule', canActivate: [AuthAdminGuard]},
  {path: 'user', loadChildren: './user/user.module#UserModule', canActivate: [AuthUserGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: true,
    scrollPositionRestoration: 'enabled',
    malformedUriErrorHandler: (error: URIError, urlSerializer: UrlSerializer, url: string) => {
      console.log(url);
      return urlSerializer.parse('/');
    }
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
