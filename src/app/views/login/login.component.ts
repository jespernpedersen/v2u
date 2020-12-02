import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginCredentials } from 'src/app/models/login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  /*
  * FormGroup used to make the login validation
  */

  LoginForm: FormGroup;

  /*
  * ngModel property for email
  */
 email: string;

  /*
  * ngModel propert for password
  */
 password: string;

  constructor(private fb: FormBuilder, private loginSvc: LoginService ) { }

  ngOnInit(): void {
    this.createForm();
  }

  /*
  * Create a login form
  * sets email validation and a password validation
  */
 createForm() {
   this.LoginForm = this.fb.group({
     email: ['', Validators.required],
     password: ['', Validators.required]
   })
 }

 Login() {
  const credentials: LoginCredentials = {
    email: this.email,
    password: this.password
  };
  this.loginSvc.Login(credentials);
}
}
