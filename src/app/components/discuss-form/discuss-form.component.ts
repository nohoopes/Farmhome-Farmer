import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-discuss-form',
  templateUrl: './discuss-form.component.html',
  styleUrls: ['./discuss-form.component.scss']
})
export class DiscussFormComponent implements OnInit {

  
  baseApiUrl: string = environment.baseApiUrl;

  discussForm: FormGroup;

  constructor(
    private http: HttpClient,
    private router: Router,
    ){}

  ngOnInit(): void {
    localStorage.removeItem('idUser');
    localStorage.clear;
    this.discussForm = new FormGroup({
      id:  new FormControl (null, Validators.required),
      dealPrice: new FormControl (null, Validators.required),
      dealAmount: new FormControl (null, Validators.required)
    })
  }

  submit():void {
    this.http.put(this.baseApiUrl + '/order/suggest/', this.discussForm.getRawValue(), {withCredentials: true})

      .subscribe((res: any) => {
        alert('Sucessfull deal new price!')
        this.ngOnInit();
      },
      err => {
        alert ('Request fail, please try again!');
      });
  }

}
