import {Injectable} from '@angular/core';
import {User} from '../../model/user';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {DataService} from './data.service';

@Injectable()
export class AuthService {

  constructor(private http: HttpClient,
              private dataService: DataService) {
  }

  signIn(credentials: User) {
    if (credentials.name === 'admin') {
      this.dataService.setROLE('ADMIN');
      this.dataService.setTOKEN('asdad');
    }
    if (credentials.name === 'manager') {
      this.dataService.setROLE('MANAGER');
      this.dataService.setTOKEN('asdad');
    }
    if (credentials.name === 'user') {
      this.dataService.setROLE('USER');
      this.dataService.setTOKEN('asdad');
    }
   // return this.http.post<User>('', JSON.stringify(credentials)).pipe();
  }

  signOut() {
    this.dataService.clear();
  }

  signUp(user: User) {
    return this.http.post<User>('', JSON.stringify(user)).pipe();
  }

  refreshToken(credentials: User): Observable<User> {
    return this.http.post<User>('', JSON.stringify(credentials)).pipe();
  }

  checkSession(): boolean {
    return this.dataService.getToken() != null && this.dataService.getRole() != null;
  }


}
