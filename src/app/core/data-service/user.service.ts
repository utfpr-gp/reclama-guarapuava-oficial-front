import {Injectable} from '@angular/core';
import {AbstractService} from './abstract.service';
import {User} from '../../model/user';
import {HttpClient} from '@angular/common/http';
import {RouteApi} from '../../shared/util/route-api';
import {Observable} from 'rxjs';

const url = RouteApi.USERS;

@Injectable()
export class UserService extends AbstractService<User> {

  constructor(http: HttpClient) {
    super(http, url);
  }

  findByEmail(email: string): Observable<User> {
    return this.http.get<User>(`${url}?email=${email}`).pipe();
  }
}
