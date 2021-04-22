import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from '../model/product.model';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.scss']
})
export class ProductUpdateComponent implements OnInit {
  productForm: FormGroup;
  products: IProduct[] = [];
  valid: boolean = false;
  productId: number;

  constructor(
    private formBuilder: FormBuilder,
    private productService: ProductService,
    private router: Router,
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
      this.productForm.patchValue({
        name: productItem.name,
        description: productItem.description,
        price: productItem.price,
        information: productItem.information
      })
    }
  }

  saveProduct() {
    this.valid = true;
    let product: IProduct = {};
    if (this.productForm.valid) {
      product.id = this.productId;
      product.name = this.productForm.value.name;
      product.description = this.productForm.value.description;
      product.price = this.productForm.value.price;
      product.information = this.productForm.value.information;
      this.productService.updateProduct(product);
      alert("Product updated successfully");
      this.router.navigateByUrl('/manage-products')
    }
  }

  clearProduct() {
    this.productForm.reset();
  }
}
