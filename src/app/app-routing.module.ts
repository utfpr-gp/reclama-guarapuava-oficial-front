import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthAdminGuard} from './auth/guard/auth.admin.guard';
import {HomeComponent} from './static-page/home/home.component';

const routes: Routes = [
  {path: '', component: HomeComponent, canActivate: [AuthAdminGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
