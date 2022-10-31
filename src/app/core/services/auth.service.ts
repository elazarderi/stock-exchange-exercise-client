import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { IUser } from 'src/app/shared/types/common-types/user.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  public currentUser: Partial<IUser> = {};

  constructor(private http: HttpClient, public router: Router) { }

  signUp(user: IUser): Observable<IUser | null> {
    return this.http.post<IUser | null>(`${environment.apiURL}/signup`, user).pipe(catchError(this.handleError));
  }

  signIn(user: IUser): Observable<IUser | null> {
    return this.http.post<IUser | null>(`${environment.apiURL}/signin`, user).pipe(catchError(this.handleError));
  }

  get token(): string {
    return localStorage.getItem('access_token');
  }

  get isLoggedIn(): boolean {
    let authToken = this.token;
    return authToken !== null ? true : false;
  }

  doLogout() {
    const removeToken = localStorage.removeItem('access_token');
    this.currentUser = {};
    if (removeToken == null) {
      this.router.navigate(['log-in']);
    }
  }

  getUserProfile(id: any): Observable<any> {
    return this.http.get(`${environment.apiURL}/user-profile`,
      { headers: this.headers }).pipe(
        map((res) => {
          return res || {};
        }),
        catchError(this.handleError)
      );
  }

  handleError(error: HttpErrorResponse) {
    let msg = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      msg = error.error.message;
    } else {
      // server-side error
      msg = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(msg);
  }
}