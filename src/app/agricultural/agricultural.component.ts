import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Product } from '../api-model/product.model';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-agricultural',
  templateUrl: './agricultural.component.html',
  styleUrls: ['./agricultural.component.scss'],
})
export class AgriculturalComponent implements OnInit {
  static idFarmer = localStorage.getItem("idUser");

  baseApiUrl: string = environment.baseApiUrl;

  products:  Product[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {

  }
}
