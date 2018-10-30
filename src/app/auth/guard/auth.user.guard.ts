import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {AuthService} from '../service/auth.service';
import {DataService} from '../service/data.service';

@Injectable()
export class AuthUserGuard implements CanActivate {

  constructor(private router: Router,
              private authService: AuthService,
              private dataService: DataService) {
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (this.authService.checkSession() && this.dataService.getRole() === 'USER') {
      return true;
    } else {
      this.router.navigate(['/auth/sign-in']);
      return false;
    }
  }
}
