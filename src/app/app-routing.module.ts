import {NgModule} from '@angular/core';
import {RouterModule, Routes, UrlSerializer} from '@angular/router';
import {AuthAdminGuard} from './auth/guard/auth.admin.guard';
import {HomeComponent} from './static-page/home/home.component';
import {SignInComponent} from './static-page/sign-in/sign-in.component';
import {SignUpComponent} from './static-page/sign-up/sign-up.component';
import {SignOutComponent} from './static-page/sign-out/sign-out.component';

const routes: Routes = [
  {path: '', component: HomeComponent, canActivate: [AuthAdminGuard]},
  {
    path: 'auth', children: [
      {path: 'sign-in', component: SignInComponent},
      {path: 'sign-up', component: SignUpComponent},
      {path: 'sign-out', component: SignOutComponent}
    ]
  }
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
