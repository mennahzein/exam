import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Data } from '../model/app.model';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userInvalid = false;

  employee!: Data;

  constructor(
    private loginService: LoginService,
    private router: Router,
    private formBuilder: FormBuilder) {
  }

  loginForm = this.formBuilder.group({
    email: '',
    password: ''
  });


  ngOnInit() {}

  onLogIn() {
    if (this.loginForm.value.email && this.loginForm.value.password) {

      if (this.loginService.getUser(this.loginForm.value.email, this.loginForm.value.password)) {
        this.router.navigate(['/Products']);
      } else {
        this.userInvalid = true;
      }
    }
  }
}
