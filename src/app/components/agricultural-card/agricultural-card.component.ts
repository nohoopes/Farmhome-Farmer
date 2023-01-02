import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/api-model/product.model';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-agricultural-card',
  templateUrl: './agricultural-card.component.html',
  styleUrls: ['./agricultural-card.component.scss'],
})
export class AgriculturalCardComponent implements OnInit {
  static idFarmer = localStorage.getItem('idUser');

  baseApiUrl: string = environment.baseApiUrl;

  size: any;

  products: Product[] = [];

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
    this.http
      .get(
        this.baseApiUrl + '/fruit/farmer/' + AgriculturalCardComponent.idFarmer +'?no=0&limit=100',
        { withCredentials: true }
      )
      .subscribe((res: any) => {
        this.products = res.contents;
        this.size = res.contents.length;
        console.log(this.products);
      });
  }

  deleteProduct(id: string) {
    let confirmAction = confirm('Are you sure to delete this?');
    if (confirmAction) {
      this.http
        .delete(this.baseApiUrl + '/fruit/delete/' + id, {
          withCredentials: true,
        })
        .subscribe({
          next: (response) => {
            this.router.navigate(['agricultural']);
            alert('Delete successfully! 😀');
            this.ngOnInit();
          },
          error: (products) => {
            console.log(products);
            alert('Something went wrong! Please try again later 😢');
          },
        });
    } else {
      alert('Action canceled');
    }
  }
}
