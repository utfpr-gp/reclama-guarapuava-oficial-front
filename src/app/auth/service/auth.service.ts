import {Injectable} from '@angular/core';
import {User} from '../../model/user';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {DataService} from './data.service';
import {RouteApi} from '../../shared/util/route-api';

@Injectable()
export class AuthService {

  constructor(private http: HttpClient,
              private dataService: DataService) {
  }

  signIn(credentials: User): Observable<User> {
    return this.http.get<User>(`${RouteApi.USERS}?email=${credentials.email}&password=${credentials.password}`).pipe();
  }

  signOut() {
    this.dataService.clear();
  }

  signUp(user: User): Observable<User> {
    return this.http.post<User>(RouteApi.USERS, JSON.stringify(user)).pipe();
  }

  refreshToken(credentials: User): Observable<User> {
    return this.http.post<User>('', JSON.stringify(credentials)).pipe();
  }

  checkSession(): boolean {
    return this.dataService.getToken() != null && this.dataService.getRole() != null;
  }


}
