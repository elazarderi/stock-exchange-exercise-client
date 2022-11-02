import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { IDeal, IOffer, IShare, TOfferType } from 'src/app/shared/types';
import { StocksService } from '../stocks.service';

@Component({
  selector: 'app-stock-details',
  templateUrl: './stock-details.component.html',
  styleUrls: ['./stock-details.component.scss']
})
export class StockDetailsComponent implements OnInit {

  offersDisplayedColumns: string[] = ['date', 'type', 'offeredType', 'offeredName'];
  offersDataSource: IOffer[] = [];
  isOffersLoading: boolean = false;

  dealsDisplayedColumns: string[] = ['date', 'sellerType', 'sellerName', 'buyerType', 'buyerName', 'price'];
  dealsDataSource: IDeal[] = [];
  isDealsLoading: boolean = false;

  share: IShare;

  constructor(private route: ActivatedRoute,
    private stocksService: StocksService,
    public authService: AuthService) { }

  ngOnInit(): void {
    this.share = this.route.snapshot.queryParams as IShare;
    this.getShareOffers(this.share.id);
    this.fetchLastDeals(this.share.id);
  }

  makeOffer(type: TOfferType) {
    this.stocksService.makeOffer(this.authService.currentUser.traderId, this.share.id, type).subscribe(a => {
      console.log(a)
    })
  }

  getShareOffers(id: number) {
    this.isOffersLoading = true;
    this.stocksService.getShareOffers(id).subscribe(offers => {
      this.offersDataSource = offers;
      this.isOffersLoading = false;
      console.log(this.offersDataSource);
    });
  }

  fetchLastDeals(id: number) {
    this.isDealsLoading = true;
    this.stocksService.getShareLastDeals(id).subscribe(deals => {
      this.dealsDataSource = deals;
      this.isDealsLoading = false;
      console.log(this.dealsDataSource);
    });
  }

}
