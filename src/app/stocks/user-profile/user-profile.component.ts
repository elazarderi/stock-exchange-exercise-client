import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';
import { IDeal } from 'src/app/shared/types';
import { StocksService } from '../stocks.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  dealsDisplayedColumns: string[] = ['date', 'share', 'action', 'price'];
  dealsDataSource: IDeal[] = [];
  isDealsLoading: boolean = false;

  constructor(private stocksService: StocksService,
    public authService: AuthService) { }

  ngOnInit(): void {
    const id: number = this.authService.currentUser.traderId;
    if (id) this.fetchLastDeals(this.authService.currentUser.traderId);
  }

  fetchLastDeals(id: number) {
    this.isDealsLoading = true;
    this.stocksService.getTraderLastDeals(id).subscribe(deals => {
      this.dealsDataSource = deals;
      this.isDealsLoading = false;
      console.log(this.dealsDataSource);
    });
  }

}
