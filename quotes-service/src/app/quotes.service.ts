import { Injectable } from '@angular/core';
import { Quote } from './quote';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class QuotesService {

  constructor(private http: HttpClient) { }

  fetchQuote(): Observable<Quote> {
    // fetch quote from http://forismatic.com/en/api/
    // see file proxy.conf.json for http proxy to avoid issue with CORS (Cross-Origin-Request-Sharing)
    return this.http.get<Quote>('/api/1.0/?method=getQuote&key=457653&format=json&lang=en');
  }

}
