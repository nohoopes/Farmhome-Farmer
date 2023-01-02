import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { tap } from 'rxjs';

import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-agricultural-add-form',
  templateUrl: './agricultural-add-form.component.html',
  styleUrls: ['./agricultural-add-form.component.scss'],
})
export class AgriculturalAddFormComponent implements OnInit {
  form: FormGroup;
  baseApiUrl: string = environment.baseApiUrl;

  //variables
  static idFarmer = localStorage.getItem('idUser');
  name: any;
  weight: any;
  unit: any;
  date: any;
  season: any;

  p_product;
  p_confidence;
  p_season;

  constructor(public fb: FormBuilder, private http: HttpClient) {
    this.form = this.fb.group({
      image: [null],
    });
  }
  ngOnInit() {
    this;
  }
  uploadFile(event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.form.patchValue({
      image: file,
    });
    this.form.get('image').updateValueAndValidity();
  }

  detect(formdata: any) {
    this.http
      .post(
        'https://fruit-vegetable-detect-production.up.railway.app/detect',
        formdata
      )
      .pipe(
        tap({
          next: (response: any) => {
            alert(
              'Detect successfully! Please wait a little bit for the progress'
            );
            this.p_product = `${response[0].fruit}`;
            this.name = this.p_product;
            this.p_season = this.getSeason(this.p_product);
            this.season = this.p_season;
            this.p_confidence = `${response[0].confidence}`;
            console.log(this.p_product);
            console.log(this.p_confidence);
          },
          error: (error) => {
            console.log(error);
            alert(
              'Something went wrong! Please check the input or try again later 😢'
            );
          },
        })
      )
      .subscribe();
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
    formData.append(
      'fruit',
      JSON.stringify({
        name: this.name,
        weight: this.weight,
        unit: 'kg',
        date: this.date,
        season: this.season,
        farmer: {
          id: AgriculturalAddFormComponent.idFarmer,
        },
      })
    );
    this.http
      .post(this.baseApiUrl + '/admin/fruit/create', formData)
      .pipe(
        tap({
          next: (response: any) => {
            console.log(response);
            alert('Add new agricultural product successfully!!!');
            this.ngOnInit();
          },
          error: (error) => {
            console.log(error);
            alert('Something went wrong! Please try again later 😢');
          },
        })
      )
      .subscribe();
  }

  //get event
  changeName(e: any) {
    this.name = e;
  }
  changeWeight(e: any) {
    this.weight = e;
  }
  changeSeason(e: any) {
    this.season = e;
  }
  changeDate(e: any) {
    this.date = e;
  }

  getSeason(name: any) {
    var ss: string;
    if (
      name == 'grapes' ||
      name == 'pomegranate' ||
      name == 'banana' ||
      name == 'carrot' ||
      name == 'garlic' ||
      name == 'onion' ||
      name == 'pineapple' ||
      name == 'orange' ||
      name == 'capsicum'
    ) {
      ss = 'Spring';
    }
    if (
      name == 'jalepeno' ||
      name == 'paprika' ||
      name == 'watermelon' ||
      name == 'raddish' ||
      name == 'lettuce' ||
      name == 'spinach' ||
      name == 'tomato' ||
      name == 'sweetpotato' ||
      name == 'cauliflower'
    ) {
      ss = 'Summer';
    }
    if (
      name == 'bell pepper' ||
      name == 'peas' ||
      name == 'lemon' ||
      name == 'kiwi' ||
      name == 'chilli pepper' ||
      name == 'cabbage' ||
      name == 'turnip' ||
      name == 'eggplant' ||
      name == 'potato'
    ) {
      ss = 'Autumn';
    }
    if (
      name == 'soy beans' ||
      name == 'pear' ||
      name == 'mango' ||
      name == 'beetroot' ||
      name == 'sweetcorn' ||
      name == 'cucumber' ||
      name == 'corn' ||
      name == 'apple' ||
      name == 'ginger'
    ) {
      ss = 'Winter';
    }
    return ss;
  }
}
