import {Injectable} from '@angular/core';
import {AbstractService} from './abstract.service';
import {Gender} from '../../model/gender';
import {HttpClient} from '@angular/common/http';
import {RouteApi} from '../../shared/util/route-api';

const url = RouteApi.GENDERS;

@Injectable()
export class GenderService extends AbstractService<Gender> {
  constructor(http: HttpClient) {
    super(http, url);
  }
}
