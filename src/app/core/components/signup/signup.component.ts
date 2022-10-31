import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { IUser } from 'src/app/shared/types/common-types/user.interface';
import { AuthService } from '../../services/auth.service';
import { SnackbarService } from '../../services/snackbar.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  @Input() error: string | null;
  signupForm: FormGroup;

  constructor(public fb: FormBuilder,
    public authService: AuthService,
    public router: Router,
    private snackbarService: SnackbarService) {
    this.signupForm = this.fb.group({
      firstName: [''],
      lastName: [''],
      userName: [''],
      password: [''],
    });
  }

  ngOnInit() { }

  registerUser() {
    this.authService.signUp(this.signupForm.value).subscribe({
        next: (user: IUser) => {
          if (user) {
            this.snackbarService.openSnackBar('המשתמש נוצר בהצלחה');
            this.signupForm.reset();
            this.router.navigate(['log-in']);
          }
        },
        error: (error) => {
          this.snackbarService.openSnackBar(error.error);
        }
      });
  }

}
