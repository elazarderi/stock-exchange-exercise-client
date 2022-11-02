import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from '../shared/services/http.service';
import { IDeal, IOffer, IShare } from '../shared/types';

@Injectable({
  providedIn: 'root'
})
export class StocksService {

  constructor(private httpService: HttpService) { }

  getShares(): Observable<IShare[]> {
    return this.httpService.getShares();
  }

  getShareOffers(shareId: number): Observable<IOffer[]> {
    return this.httpService.getShareOffers(shareId);
  }

  getShareLastDeals(shareId: number): Observable<IDeal[]> {
    return this.httpService.getShareLastDeals(shareId);
  }

  getTraderLastDeals(traderId: number): Observable<IDeal[]> {
    return this.httpService.getTraderLastDeals(traderId);
  }
}
