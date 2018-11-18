import {Component} from '@angular/core';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {AuthService} from '../../auth/service/auth.service';
import {DataService} from '../../auth/service/data.service';
import {Router} from '@angular/router';

@Component({
  selector: 'utfpr-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  adminRoutes: UserRoutes[] = [
    {title: 'Home', url: 'admin/dash'},
    {title: 'Categorias', url: 'admin/category'},
    {title: 'Problemas', url: 'admin/problems'},
    {title: 'Bairros', url: 'admin/neighborhood'}
  ];

  managerRoutes: UserRoutes[] = [
    {title: 'Home', url: 'manager/dash'},
  ];
  userRoutes: UserRoutes[] = [
    {title: 'Home', url: 'user/dash'},
    {title: 'Ocorrencias', url: 'user/occurrences'}
  ];
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  constructor(private breakpointObserver: BreakpointObserver,
              private authService: AuthService,
              private dataService: DataService,
              private route: Router) {
  }

  isAdmin(): boolean {
    return this.authService.checkSession() && this.dataService.getRole() === 'ADMIN';
  }

  isManager(): boolean {
    return this.authService.checkSession() && this.dataService.getRole() === 'MANAGER';
  }

  isUser(): boolean {
    return this.authService.checkSession() && this.dataService.getRole() === 'USER';
  }

  checkLogin(): boolean {
    return this.authService.checkSession();
  }

  signOut() {
    this.authService.signOut();
    this.route.navigate(['auth/sign-in']);
  }
}

interface UserRoutes {
  title: string;
  url: string;
}
