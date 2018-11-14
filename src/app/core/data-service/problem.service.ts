import {Injectable} from '@angular/core';
import {AbstractService} from './abstract.service';
import {Problem} from '../../model/problem';
import {HttpClient} from '@angular/common/http';
import {RouteApi} from '../../shared/util/route-api';

const url = RouteApi.PROBLEMS;

@Injectable()
export class ProblemService extends AbstractService<Problem> {

  constructor(http: HttpClient) {
    super(http, url);
  }
}
