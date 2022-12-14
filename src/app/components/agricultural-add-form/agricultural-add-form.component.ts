import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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

  @ViewChild('fileInput') fileInput: any;

  url="https://cdn-icons-png.flaticon.com/512/1625/1625048.png";

  static idFarmer = localStorage.getItem("idUser");

  fid = AgriculturalAddFormComponent.idFarmer;

  baseApiUrl: string = environment.baseApiUrl;

  addProductForm : FormGroup;

  addproducts:  Product [];

  constructor(private http: HttpClient, private _productService: ProductsService,private router: Router) {}

  ngOnInit(): void {

    this.addProductForm = new FormGroup({
      name:  new FormControl (null, Validators.required),
      weight: new FormControl (null, Validators.required),
      height: new FormControl (null, Validators.required),
      season: new FormControl (null, Validators.required),
      date: new FormControl (null, Validators.required),
    })

  }

  onSelect (event) {
    let fileType = event.target.files[0].type;
    if (fileType.match(/image\/*/)) {
      let reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.onload = (event: any) => {
        this.url = event.target.result;
      };
    } else {
      window.alert('Please select correct image format');
    }
  }

  addProduct() {
    let product: Product = {
      name: this.Name.value,
      weight: this.Weight.value,
      season: this.Season.value,
      date: this.Date.value,
      images: this.fileInput.nativeElement.files[0]?.name,
      unit: 'kg'
    };
    this._productService.addProduct(product, this.fid).subscribe((res) => {
      this.addproducts.unshift(res);
      console.log(res);
    }, (err) => {
      alert ('Add fail, please try again!');
    });
  }


  public get Name(): FormControl {
    return this.addProductForm .get('name') as FormControl;
  }
  public get Weight(): FormControl {
    return this.addProductForm .get('weight') as FormControl;
  }
  public get Season(): FormControl {
    return this.addProductForm .get('season') as FormControl;
  }
  public get Date(): FormControl {
    return this.addProductForm .get('date') as FormControl;
  }
}
