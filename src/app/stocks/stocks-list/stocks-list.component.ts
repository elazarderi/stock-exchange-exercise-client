import { Component, OnInit } from '@angular/core';
import { IShare } from 'src/app/shared/types';
import { StocksService } from '../stocks.service';

@Component({
  selector: 'app-stocks-list',
  templateUrl: './stocks-list.component.html',
  styleUrls: ['./stocks-list.component.scss']
})
export class StocksListComponent implements OnInit {

  shares: IShare[] = [];
  isLoading: boolean = false;

  constructor(private stocksService: StocksService) { }

  ngOnInit(): void {
    this.isLoading = true;

    if (!this.shares.length) {
      this.stocksService.getShares().subscribe(data => {
        this.shares = data;
        this.isLoading = false;
      });
    }
  }
}
