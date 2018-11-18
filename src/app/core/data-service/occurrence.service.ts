import {Injectable} from '@angular/core';
import {AbstractService} from './abstract.service';
import {Occurrence} from '../../model/occurrence';
import {HttpClient} from '@angular/common/http';
import {RouteApi} from '../../shared/util/route-api';

const url = RouteApi.OCCURRENCES;

@Injectable()
export class OccurrenceService extends AbstractService<Occurrence> {

  constructor(http: HttpClient) {
    super(http, url);
  }
}
