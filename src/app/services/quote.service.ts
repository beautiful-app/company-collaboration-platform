import {Inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Quote} from '../domain/quote.model';
import {map} from 'rxjs/operators';

@Injectable()
export class QuoteService {
    // private uri: string = 'https://api.hzy.pw/saying/v1/ciba';
    constructor(@Inject('BASE_CONFIG') private config,
                private http: HttpClient) {
    }
    
    getQuote(): Observable<Quote> {
        const uri = `${this.config.uri}/quotes/${Math.floor(Math.random() * 10)}`;
        return this.http.get(uri).pipe(map(r => r as Quote));
        // return this.http.get(uri);
    }
}
