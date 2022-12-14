import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Order } from 'src/app/api-model/order.model';
import { environment } from 'src/environments/environment';
import {DiscussFormComponent} from '../discuss-form/discuss-form.component'

@Component({
  selector: 'app-order-table',
  templateUrl: './order-table.component.html',
  styleUrls: ['./order-table.component.scss']
})
export class OrderTableComponent implements OnInit {

  constructor(private dialog: MatDialog, private http: HttpClient, private router: Router) {}

  openDialog() {
    this.dialog.open(DiscussFormComponent);
  }

  static idFarmer = localStorage.getItem('idUser');

  baseApiUrl: string = environment.baseApiUrl;

  orders: Order[] = [];

  ngOnInit(): void {
    this.http
      .get(
        this.baseApiUrl + '/order/farmer/' + OrderTableComponent.idFarmer,
        { withCredentials: true }
      )
      .subscribe((res: any) => {
        this.orders = res.contents;
        console.log(this.orders);
      });
  }

  acceptOrder(id: string) {
    let confirmAction = confirm('Do you want to accept this order?');
    if (confirmAction) {
      this.http
        .post(this.baseApiUrl + '/order/accept' + id, {
          withCredentials: true,
        })
        .subscribe({
          next: (response) => {
            this.router.navigate(['order']);
            alert('Accept successfully!');
            this.ngOnInit();
          },
          error: (orders) => {
            console.log(orders);
            alert('Something went wrong! Please try again later 😢');
          },
        });
    } else {
      alert('Action canceled');
    }
  }

  deleteOrder(id: string) {
    let confirmAction = confirm('Are you sure to decline this order?');
    if (confirmAction) {
      this.http
        .delete(this.baseApiUrl + '/order/cancel/' + id, {
          withCredentials: true,
        })
        .subscribe({
          next: (response) => {
            this.router.navigate(['order']);
            alert('Decline successfully!');
            this.ngOnInit();
          },
          error: (orders) => {
            console.log(orders);
            alert('Something went wrong! Please try again later 😢');
          },
        });
    } else {
      alert('Action canceled');
    }
  }

}

