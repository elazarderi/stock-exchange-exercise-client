import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, map, Observable, retry, switchMap, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IOffer, IShare } from '../types';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  getShares(): Observable<IShare[] | null> {
    return this.http.get<IShare[] | null>(environment.apiURL + '/shares/all');
  }

  getShareOffers(shareId: number): Observable<IOffer[] | null> {
    return this.http.get<IOffer[] | null>(environment.apiURL + `/offers/share/${shareId}`);
  }

  // Error handling
  handleError(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(() => {
      return errorMessage;
    });
  }

}
