import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/shared/services/http.service';
import { IShare } from 'src/app/shared/types';

@Component({
  selector: 'app-stocks-list',
  templateUrl: './stocks-list.component.html',
  styleUrls: ['./stocks-list.component.scss']
})
export class StocksListComponent implements OnInit {

  shares: IShare[] = [];

  constructor(private httpService: HttpService) { }

  ngOnInit(): void {
    this.httpService.getShares().subscribe(data => this.shares = data);
  }
}
