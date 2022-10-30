import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IOffer, IShare } from 'src/app/shared/types';
import { StocksService } from '../stocks.service';

@Component({
  selector: 'app-stock-details',
  templateUrl: './stock-details.component.html',
  styleUrls: ['./stock-details.component.scss']
})
export class StockDetailsComponent implements OnInit {

  displayedColumns: string[] = ['date', 'type', 'offeredType', 'offeredName'];
  dataSource: IOffer[] = [];

  share: IShare;
  isOffersLoading: boolean = false;

  constructor(private route: ActivatedRoute,
    private stocksService: StocksService) { }

  ngOnInit(): void {
    this.share = this.route.snapshot.queryParams as IShare;
    this.getShareOffers(this.share.id);
  }

  getShareOffers(id: number) {
    this.isOffersLoading = true;
    this.stocksService.getShareOffers(id).subscribe(offers => {
      this.dataSource = offers;
      this.isOffersLoading = false;
      console.log(this.dataSource);
    });
  }

}
