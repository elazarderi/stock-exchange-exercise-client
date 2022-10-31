import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { SnackbarService } from '../../services/snackbar.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  @Input() error: string | null;
  currentUser = {};
  signinForm: FormGroup;

  constructor(public fb: FormBuilder,
    public authService: AuthService,
    public router: Router,
    private snackbarService: SnackbarService) {
    this.signinForm = this.fb.group({
      userName: [''],
      password: [''],
    });
  }

  ngOnInit() { }

  loginUser() {
    this.authService.signIn(this.signinForm.value).subscribe({
      next: (res: any) => {
        localStorage.setItem('access_token', res.token);
        this.snackbarService.openSnackBar('התחברת בהצלחה');
        this.authService.getUserProfile(res._id).subscribe((res) => {
          this.currentUser = res;
          this.router.navigate(['user-profile/' + res.msg._id]);
        });
      },
      error: (error) => {
        this.snackbarService.openSnackBar(error.error);
      }
    });
  }

}
