import { Component } from '@angular/core';
import { AuthService } from './core/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'stock exchange';
  constructor(public authService: AuthService) { }
  
  logout() {
    console.log(this.authService.currentUser);
    this.authService.doLogout()
  }
}
