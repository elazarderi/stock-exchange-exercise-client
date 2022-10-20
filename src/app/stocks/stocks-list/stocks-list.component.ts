import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/shared/services/http.service';
import { IShare } from 'src/app/shared/types';
import { StocksService } from '../stocks.service';

@Component({
  selector: 'app-stocks-list',
  templateUrl: './stocks-list.component.html',
  styleUrls: ['./stocks-list.component.scss']
})
export class StocksListComponent implements OnInit {

  shares: IShare[] = [];

  constructor(private stocksService: StocksService) { }

  ngOnInit(): void {
    this.stocksService.getShares().subscribe(data => this.shares = data);
  }
}
