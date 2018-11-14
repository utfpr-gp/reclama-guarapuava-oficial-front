import {Injectable} from '@angular/core';
import {AbstractService} from './abstract.service';
import {Neighborhood} from '../../model/neighborhood';
import {HttpClient} from '@angular/common/http';
import {RouteApi} from '../../shared/util/route-api';

const url = RouteApi.NEIGHBORHOOD;

@Injectable()
export class NeighborhoodService extends AbstractService<Neighborhood> {


  constructor(http: HttpClient) {
    super(http, url);
  }
}
