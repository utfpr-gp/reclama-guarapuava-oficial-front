import {Injectable} from '@angular/core';
import {AbstractService} from './abstract.service';
import {Comment} from '../../model/comment';
import {RouteApi} from '../../shared/util/route-api';
import {HttpClient} from '@angular/common/http';

const url = RouteApi.COMMENTS;

@Injectable()
export class CommentService extends AbstractService<Comment> {

  constructor(http: HttpClient) {
    super(http, url);
  }
}
