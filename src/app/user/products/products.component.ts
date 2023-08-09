import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { Product } from 'src/app/core/models/Product';
import { DataService } from 'src/app/core/service/data.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  filterForm: FormGroup = new FormGroup({
    productCode: new FormControl(''),
    brand: new FormControl(''),
    productName: new FormControl('')
  });
  allProducts!: Array<Product>;
  products!: Array<Product>;
  errorMessage!: string;

  constructor(private dataService: DataService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.dataService.getAllProducts().subscribe((res) => {
      this.allProducts = res;
    });

    this.route.params.subscribe(params => {
      const search = params['search'];
      this.dataService.getProductsBySearch(search).subscribe(products => {
        this.products = products;
        if(products.length === 0) {
          this.errorMessage = "No Products Found."
        }
      });
    });
  }

  submitFilters() {
    let productCode = this.filterForm.get('productCode')?.value;
    let brand = this.filterForm.get('brand')?.value;
    let productName = this.filterForm.get('productName')?.value;

    if(productCode === '') {
      productCode = this.products[0].productCode;
    }

    if(brand === '') {
      brand = this.products[0].brand;
    } 

    if(productName === '') {
      productName = this.products[0].productName;
    }

    // console.log(productCode, brand, productName);

    this.dataService.getProductsByFilter(productCode, brand, productName).subscribe(products => {
      this.products = products;

      if(products.length > 0) {
        this.errorMessage = '';
      }
    });
  }

}
