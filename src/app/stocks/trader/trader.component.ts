import { Component, OnInit, Input } from '@angular/core';
import { ITrader } from 'src/app/shared/types';

@Component({
  selector: 'app-trader',
  templateUrl: './trader.component.html',
  styleUrls: ['./trader.component.scss']
})
export class TraderComponent implements OnInit {

  @Input() trader: ITrader;

  constructor() { }

  ngOnInit(): void {
  }

}
