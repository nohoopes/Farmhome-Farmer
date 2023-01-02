import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Order } from 'src/app/api-model/order.model';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-history-table',
  templateUrl: './history-table.component.html',
  styleUrls: ['./history-table.component.scss']
})
export class HistoryTableComponent implements OnInit {

  constructor( private http: HttpClient, private router: Router) {}


  static idFarmer = localStorage.getItem('idUser');

  baseApiUrl: string = environment.baseApiUrl;

  orders: Order[] = [];

  ngOnInit(): void {
    console.log(HistoryTableComponent.idFarmer)
    this.http
      .get(
        this.baseApiUrl + '/history/user/' + HistoryTableComponent.idFarmer,
        { withCredentials: true }
      )
      .subscribe((res: any) => {
        this.orders = res.contents;
        console.log(this.orders);
      });
  }

}
