import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

export abstract class AbstractService<T> {

  protected constructor(private http: HttpClient, private url: string) {
  }

  all(): Observable<T> {
    return this.http.get<T>(this.url);
  }

  create(model: T): Observable<T> {
    return this.http.post<T>(this.url, JSON.stringify(model));
  }
}
