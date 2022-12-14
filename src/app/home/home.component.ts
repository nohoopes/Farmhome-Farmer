import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  message = "Welcome"

  baseApiUrl: string = environment.baseApiUrl;
  
  constructor(
    private http: HttpClient,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.http.get(this.baseApiUrl+'/user/profile', {withCredentials: true}).subscribe(
      (res:any) => {
        this.message = `Hi ${res.firstName} ${res.lastName} , Welcome to Farmhome!`;
        console.log(res.id);
      },
      err => {
        alert ('You are not login, please login first');
        this.router.navigate(['/login'])
      }
    )
  }

}
