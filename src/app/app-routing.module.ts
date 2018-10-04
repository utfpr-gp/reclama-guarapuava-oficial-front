import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AppComponent} from './app.component';
import {AuthAdminGuard} from './auth/guard/auth.admin.guard';

const routes: Routes = [
  {path: '', component: AppComponent, canActivate: [AuthAdminGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
