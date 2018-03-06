import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from "rxjs/observable/of";
import { catchError, map, tap } from 'rxjs/operators';
import { resolve } from 'q';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class OutletterService {
  key: number;
  formatted: string;

  constructor(private http: HttpClient) { }

  getNumber(department: string): Observable<any>{
    let url = `http://localhost:3000/outletters/getNumber/${department}`;
    return this.http.get(url);
  }
}
