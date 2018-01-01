import {Injectable} from '@angular/core';
import {User} from '../../model/user';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class AuthService {

  constructor(private http: HttpClient) {
  }

  signIn(credentials: User): Observable<User> {
    return this.http.post<User>('', JSON.stringify(credentials));
  }

  signOut() {
  }

  signUp() {
  }

  refreshToken() {
  }

  checkSession() {
  }
}
