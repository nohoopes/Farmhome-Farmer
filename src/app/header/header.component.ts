import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Output() toggleSidebarForMe: EventEmitter<any> = new EventEmitter();

  baseApiUrl: string = environment.baseApiUrl;

  nameFarmer = 'Happy Farmer'
  imgUrl = ''

  constructor(
    private http: HttpClient,
  ) { }

  ngOnInit(): void {
    this.http.get(this.baseApiUrl+'/user/profile', {withCredentials: true}).subscribe(
      (res:any) => {
        this.nameFarmer = `${res.firstName} ${res.lastName}`;
        this.imgUrl = `${res.avatar}`
      }
    )
  }

  toggleSidebar() {
    this.toggleSidebarForMe.emit();
  }
}
