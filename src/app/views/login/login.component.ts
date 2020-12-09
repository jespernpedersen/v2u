import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginCredentials } from 'src/app/models/login';
import { LoginService } from 'src/app/Shared/Services/login.service';

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

  constructor(private fb: FormBuilder, private loginSvc: LoginService,private router: Router ) { }

  ngOnInit(): void {
    if (sessionStorage.getItem("user_ID")) {
      this.router.navigate(["/"])
    }
    this.createForm();
  }

  /*
  * Create a login form
  * sets email validation and a password validation
  */
 createForm() {
   this.LoginForm = this.fb.group({
     email: ['', [Validators.required, Validators.pattern(new RegExp("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")
     )]],
     password: ['', Validators.required]
   })
 }

 Login() {
  const credentials: LoginCredentials = {
    email: this.email,
    password: this.password
  };
  this.loginSvc.Login(credentials).subscribe(data => {
    data= data[0];
    if(data[0].logged_in == true) {
      sessionStorage.setItem('user_ID', data[0].ID);
      this.router.navigate(['/']);
}
  } );
}
}
