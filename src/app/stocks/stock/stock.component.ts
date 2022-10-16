import { Component, OnInit, Input } from '@angular/core';
import { IShare } from 'src/app/shared/types';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.scss']
})
export class StockComponent implements OnInit {

  @Input('share') share: IShare;

  constructor() { }

  ngOnInit(): void {
  }

}
