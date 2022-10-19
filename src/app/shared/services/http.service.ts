import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, map, Observable, retry, switchMap, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IShare } from '../types';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private sharesSource = new BehaviorSubject<IShare[] | null>(null);
  shares$: Observable<IShare[] | null> = this.sharesSource.asObservable();

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  getShares(): Observable<IShare[]|null> {
    this.sharesSource.next([])
    return this.http.get<IShare[]|null>(environment.apiURL + '/shares/all')
      .pipe(retry(1), catchError(this.handleError), switchMap(data => {
        console.log(data);
        this.sharesSource.next(data)
        return this.shares$;
      }))
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
