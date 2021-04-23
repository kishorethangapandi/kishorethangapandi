import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from '../model/product.model';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  productForm: FormGroup;
  products: IProduct[] = [];
  valid: boolean = false;
  productId: number;
  imageUrl: string;

  constructor(
    private formBuilder: FormBuilder,
    private productService: ProductService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.createProductForm();
    this.productId = Number(this.activatedRoute.snapshot.params['productId']);
    if (this.productId) {
      this.getProductList();
    }
  }

  getProductList() {
    this.products = this.productService.productList;
    this.patchProductValues();
  }

  createProductForm() {
    this.productForm = this.formBuilder.group({
      name: new FormControl(null, [Validators.required]),
      description: new FormControl(null, [Validators.required]),
      price: new FormControl(null, [Validators.required]),
      information: new FormControl()
    })
  }

  get productFormControl() {
    return this.productForm.controls;
  }

  patchProductValues() {
    let productItem: IProduct = {};
    if (this.products.length > 0) {
      productItem = this.products.filter(item => item.id === this.productId)[0];
      if (productItem.imageURL) {
        this.imageUrl = productItem.imageURL;
      }
      this.productForm.patchValue({
        name: productItem.name,
        description: productItem.description,
        price: productItem.price,
        information: productItem.information
      });
      this.productForm.get('name').disable();
      this.productForm.get('description').disable();
      this.productForm.get('price').disable();
      this.productForm.get('information').disable();
    }
  }

}
