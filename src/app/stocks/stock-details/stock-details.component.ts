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

  displayedColumns: string[] = ['date', 'type', 'offeredType', 'offeredName'];
  offersDataSource: IOffer[] = [];
  dealsDataSource: IDeal[] = [];

  share: IShare;
  isOffersLoading: boolean = false;

  constructor(private route: ActivatedRoute,
    private stocksService: StocksService) { }

  ngOnInit(): void {
    this.share = this.route.snapshot.queryParams as IShare;
    this.getShareOffers(this.share.id);
    this.getLastDeals(this.share.id);
  }

  getShareOffers(id: number) {
    this.isOffersLoading = true;
    this.stocksService.getShareOffers(id).subscribe(offers => {
      this.offersDataSource = offers;
      this.isOffersLoading = false;
      console.log(this.offersDataSource);
    });
  }

  getLastDeals(id: number) {
    this.isOffersLoading = true;
    this.stocksService.getLastDeals(id).subscribe(deals => {
      this.dealsDataSource = deals;
      this.isOffersLoading = false;
      console.log(this.dealsDataSource);
    });
  }

}
