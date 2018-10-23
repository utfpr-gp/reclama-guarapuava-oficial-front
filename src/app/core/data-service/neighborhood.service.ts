import { Injectable } from '@angular/core';
import {AbstractService} from './abstract.service';
import {Neighborhood} from '../../model/neighborhood';
import {HttpClient} from '@angular/common/http';

const url = '';
@Injectable()
export class NeighborhoodService extends AbstractService<Neighborhood>{


  constructor(http: HttpClient) {
    super(http, url);
  }
}
