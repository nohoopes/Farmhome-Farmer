import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  loginForm: FormGroup;

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      username:  new FormControl (null, Validators.required),
      password: new FormControl (null, [Validators.required, Validators.minLength(6)])
    })
  }

}
