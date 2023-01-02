import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { tap } from 'rxjs';
import { Product } from 'src/app/api-model/product.model';
import { ProductsService } from 'src/app/api-services/product.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-agricultural-add-form',
  templateUrl: './agricultural-add-form.component.html',
  styleUrls: ['./agricultural-add-form.component.scss'],
})
export class AgriculturalAddFormComponent implements OnInit {
  form: FormGroup;
  baseApiUrl: string = environment.baseApiUrl;
  p_product;
  p_confidence;



  constructor(public fb: FormBuilder, private http: HttpClient) {
    this.form = this.fb.group({
      image: [null],

    });
  }
  ngOnInit() {}
  uploadFile(event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.form.patchValue({
      image: file,
    });
    this.form.get('image').updateValueAndValidity();
  }

  detect(formdata: any) {
    this.http.post('http://127.0.0.1:5000/detect', formdata, ).pipe(tap({
      next: (response: any) => {
        alert('Detect successfully! Please wait a little bit for the progress');
        this.p_product = `${response[0].fruit}`;
        this.p_confidence = `${response[0].confidence}`;
        console.log(this.p_product);
        console.log(this.p_confidence);
      },
      error: (error) => console.log(error),
    })).subscribe();
  }

  predictForm() {
    console.log('hello');
    var formData: any = new FormData();
    formData.append('image', this.form.get('image').value);
    this.detect(formData);
  }

  addProduct() {
    var formData: any = new FormData();
    formData.append('images', this.form.get('image').value);
    formData.append('fruit', JSON.stringify({
      name: "Lựu Đạn",
      weight: 50,
      unit: "kg",
      date: "2022-12-14",
      season: "Winter",
      farmer: {
          id: 9
      },
      
    }))
    this.http.post(this.baseApiUrl + '/admin/fruit/create', formData).pipe(tap({
      next: (response: any) => {
        console.log(response);
      },
      error: (error) => console.log(error),
    })).subscribe();
  }

  changeDate(e: string){
    alert(e)
  }
}
