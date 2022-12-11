import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { AuthInterceptor } from '../interceptors/auth.interceptor';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  baseApiUrl: string = environment.baseApiUrl;

  loginForm: FormGroup;

  constructor(
    private http: HttpClient,
    private router: Router,
    ){}

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      username:  new FormControl (null, Validators.required),
      password: new FormControl (null, [Validators.required, Validators.minLength(6)])
    })
  }

  submit():void {
    this.http.post(this.baseApiUrl + '/signin', this.loginForm.getRawValue(), {withCredentials: true})

      .subscribe((res: any) => {
        AuthInterceptor.accessToken = res.accessToken;
        alert('Sucessfull Login!')
        this.router.navigate(['/']);
      });
  }

}
