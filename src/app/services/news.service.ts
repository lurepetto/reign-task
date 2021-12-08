import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NewsInterface } from '../core/interfaces/news.interface';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  private urlBase = 'https://hn.algolia.com/api/v1/search_by_date';

  constructor(private http: HttpClient) { }

  // get request with query params
  public getNewsByLanguage(query: string): Observable<any> {
    const params = new HttpParams().set('query', query);
    return this.http.get(this.urlBase, { params });
  }

}
