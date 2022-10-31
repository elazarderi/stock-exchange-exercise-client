import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  @Input() error: string | null;
  signinForm: FormGroup;
  
  constructor(public fb: FormBuilder, public authService: AuthService, public router: Router) {
    this.signinForm = this.fb.group({
      userName: [''],
      password: [''],
    });
  }

  ngOnInit() { }

  loginUser() {
    this.authService.signIn(this.signinForm.value);
  }

}
