import { Injectable } from '@angular/core';
import {AbstractService} from './abstract.service';
import {City} from '../../model/city';
import {HttpClient} from '@angular/common/http';
const url = '';

@Injectable()
export class CityService extends AbstractService<City>{

  constructor(http: HttpClient) {
    super(http, url);
  }
}
