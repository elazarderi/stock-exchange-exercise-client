import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StocksRoutingModule } from './stocks-routing.module';
import { StocksListComponent } from './stocks-list/stocks-list.component';
import { StockComponent } from './stock/stock.component';
import { StockDetailsComponent } from './stock-details/stock-details.component';
import { CoreModule } from '../core/core.module';
import { MatTableModule } from '@angular/material/table';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { TradersListComponent } from './traders-list/traders-list.component';
import { TraderComponent } from './trader/trader.component';

@NgModule({
  declarations: [
    StocksListComponent,
    StockComponent,
    StockDetailsComponent,
    UserProfileComponent,
    TradersListComponent,
    TraderComponent
  ],
  imports: [
    CommonModule,
    StocksRoutingModule,
    CoreModule,
    MatTableModule
  ]
})
export class StocksModule { }
