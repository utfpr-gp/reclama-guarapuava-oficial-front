import {Injectable} from '@angular/core';
import {AbstractService} from './abstract.service';
import {City} from '../../model/city';
import {HttpClient} from '@angular/common/http';
import {RouteApi} from '../../shared/util/route-api';
import {Observable} from 'rxjs';

const url = RouteApi.CITIES;

@Injectable()
export class CityService extends AbstractService<City> {

  constructor(http: HttpClient) {
    super(http, url);
  }

  neighborhoods(city: City): Observable<City> {
    return this.http.get(`${url}${city.id}/neighborhoods`).pipe();
  }
}
