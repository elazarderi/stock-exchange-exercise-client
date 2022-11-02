import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './core/components/signin/signin.component';
import { SignupComponent } from './core/components/signup/signup.component';
import { AuthGuard } from './core/guards/auth.guard';
import { UserProfileComponent } from './stocks/user-profile/user-profile.component';

const routes: Routes = [
  {
    path: 'stocks',
    loadChildren: () => import('./stocks/stocks.module').then(m => m.StocksModule)
  },
  { path: '', redirectTo: '/log-in', pathMatch: 'full' },
  { path: 'log-in', component: SigninComponent },
  { path: 'sign-up', component: SignupComponent },
  { path: 'user-profile', component: UserProfileComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
