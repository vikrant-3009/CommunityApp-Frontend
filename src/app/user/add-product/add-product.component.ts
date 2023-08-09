import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Product } from 'src/app/core/models/Product';
import { Review } from 'src/app/core/models/Review';
import { DataService } from 'src/app/core/service/data.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  productForm: FormGroup = new FormGroup({
    code: new FormControl('', Validators.required),
    brand: new FormControl('', Validators.required),
    name: new FormControl('', Validators.required)
  });
  errorMessage!: string;

  constructor(private dataService: DataService, private router: Router) { }

  ngOnInit(): void {
  }

  get code() {
    return this.productForm.get("code");
  }

  get brand() {
    return this.productForm.get("brand");
  }

  get name() {
    return this.productForm.get("name");
  }

  onSubmit() {
    const code = this.productForm.get("code")?.value;
    const brand = this.productForm.get("brand")?.value;
    const name = this.productForm.get("name")?.value;
    const product = new Product(code, name, brand, new Array<Review>, 0, 0);

    this.dataService.addNewProduct(product).subscribe((res) => {
      console.log('res', res);
      this.router.navigate(["user/", code, code, "reviews"]);
    }, error => {
      console.log('error', error);
      this.errorMessage = "Product already present";
      setTimeout(() => {
        this.router.navigate(["user/", code, code, "reviews"]);
      }, 5000);
    })
  }

}
