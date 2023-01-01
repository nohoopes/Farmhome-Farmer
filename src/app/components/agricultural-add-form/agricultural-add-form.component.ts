import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Product } from 'src/app/api-model/product.model';
import { ProductsService } from 'src/app/api-services/product.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-agricultural-add-form',
  templateUrl: './agricultural-add-form.component.html',
  styleUrls: ['./agricultural-add-form.component.scss']
})
export class AgriculturalAddFormComponent implements OnInit {

  form: FormGroup;
  p_product;
  p_confidence;
  constructor(public fb: FormBuilder, private http: HttpClient) {
    this.form = this.fb.group({
      name: [''],
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
  submitForm() {
    var formData: any = new FormData();
    formData.append('image', this.form.get('image').value);
    this.http
      .post('http://127.0.0.1:5000/detect', formData)

      .subscribe({
        next: (response:any) => {
       
        alert('Detect successfully! Please wait a little bit for the progress');
        this.p_product = `${response[0].fruit}`;
        this.p_confidence = `${response[0].confidence}`;
        console.log(this.p_product);
        console.log(this.p_confidence);
      },
        error: (error) => console.log(error),
      });
  }
}


