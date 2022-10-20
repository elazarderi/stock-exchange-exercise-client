import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { IShare } from 'src/app/shared/types';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.scss']
})
export class StockComponent implements OnInit {

  @Input('share') share: IShare;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  shareDetails() {
    this.router.navigate(['stocks/details'], { queryParams: this.share });
  }
}
