import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StocksRoutingModule } from './stocks-routing.module';
import { StocksListComponent } from './stocks-list/stocks-list.component';
import { StockComponent } from './stock/stock.component';
import { StockDetailsComponent } from './stock-details/stock-details.component';
import { CoreModule } from '../core/core.module';


@NgModule({
  declarations: [
    StocksListComponent,
    StockComponent,
    StockDetailsComponent
  ],
  imports: [
    CommonModule,
    StocksRoutingModule,
    CoreModule
  ]
})
export class StocksModule { }
