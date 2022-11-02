import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IDeal, IOffer, IShare } from 'src/app/shared/types';
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
    private stocksService: StocksService) { }

  ngOnInit(): void {
    this.share = this.route.snapshot.queryParams as IShare;
    this.getShareOffers(this.share.id);
    this.fetchLastDeals(this.share.id);
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
