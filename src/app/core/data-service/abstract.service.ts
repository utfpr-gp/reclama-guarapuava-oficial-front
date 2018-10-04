import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {AbstractEntity} from '../../model/abstract-entity';

export abstract class AbstractService<T extends AbstractEntity> {

  protected constructor(private http: HttpClient, private url: string) {
  }

  all(): Observable<T> {
    return this.http.get<T>(this.url);
  }

  create(model: T): Observable<T> {
    return this.http.post<T>(this.url, JSON.stringify(model));
  }

  edit(model: T): Observable<T> {
    return this.http.put<T>(this.url + model.id, JSON.stringify(model));
  }

  destroy(model: T): Observable<T> {
    return this.http.delete<T>(this.url + model.id);
  }
}
