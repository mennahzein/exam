import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, } from '@angular/forms';
import { Router } from '@angular/router';
import { Data } from '../model/app.model';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  userInvalid = false;

  employee!: Data;

  constructor(
    private loginService: LoginService,
    private router: Router,
    private formBuilder: FormBuilder) {
  }

  loginForm = new FormGroup({
    email : new FormControl(''),
    name : new FormControl(''),
    password : new FormControl(''),
    repassword : new FormControl(''),
    phone : new FormControl(''),
    
  })


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
