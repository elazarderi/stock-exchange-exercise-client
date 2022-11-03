import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IDeal, IOffer, IShare, ITrader, ITraderOwn, TOfferType } from '../types';

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

  getShareLastDeals(shareId: number): Observable<IDeal[] | null> {
    return this.http.get<IDeal[] | null>(environment.apiURL + `/deals/share/${shareId}`);
  }

  getTraderLastDeals(traderId: number): Observable<IDeal[] | null> {
    return this.http.get<IDeal[] | null>(environment.apiURL + `/deals/trader/${traderId}`);
  }

  getAllTraders(): Observable<ITrader[]> {
    return this.http.get<ITrader[] | null>(environment.apiURL + `/traders/all`);
  }

  getTrader(traderId: number): Observable<ITrader | null> {
    return this.http.get<ITrader | null>(environment.apiURL + `/traders/${traderId}`);
  }

  getTraderOwn(traderId: number, shareId: number):Observable<ITraderOwn[]> {
    return this.http.get<ITraderOwn[]>(environment.apiURL + `/trader-owns/${traderId}/${shareId}`);
  }

  makeOffer(traderId: number, shareId: number, type: TOfferType, price: number) {
    return this.http.put(environment.apiURL + `/offers/make-offer`, { traderId, shareId, type, price });
  }

  deleteOffer(id: number): Observable<any> {
    return this.http.delete(environment.apiURL + `/offers/delete/${id}`);
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
