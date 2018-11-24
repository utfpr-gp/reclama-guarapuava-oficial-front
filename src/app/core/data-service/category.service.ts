import {Injectable} from '@angular/core';
import {AbstractService} from './abstract.service';
import {Category} from '../../model/category';
import {HttpClient} from '@angular/common/http';
import {RouteApi} from '../../shared/util/route-api';
import {Observable} from 'rxjs';

const url = RouteApi.CATEGORIES;

@Injectable()
export class CategoryService extends AbstractService<Category> {

  constructor(http: HttpClient) {
    super(http, url);
  }

  problems(category: Category): Observable<Category> {
    return this.http.get<Category>(`${url}${category.id}/problems`).pipe();
  }
}
