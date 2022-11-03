import { Component, OnInit } from '@angular/core';
import { ITrader } from 'src/app/shared/types';
import { StocksService } from '../stocks.service';

@Component({
  selector: 'app-traders-list',
  templateUrl: './traders-list.component.html',
  styleUrls: ['./traders-list.component.scss']
})
export class TradersListComponent implements OnInit {
  
  traders: ITrader[] = [];
  isLoading: boolean = false;

  constructor(private stocksService: StocksService) { }

  ngOnInit(): void {
    this.getTraders();
  }

  getTraders() {
    this.isLoading = true;

    if (!this.traders.length) {
      this.stocksService.getAllTraders().subscribe(data => {
        this.traders = data;
        this.isLoading = false;
      });
    }
  }
}
