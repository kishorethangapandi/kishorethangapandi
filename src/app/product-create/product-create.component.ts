import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IProduct } from '../model/product.model';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.scss']
})
export class ProductCreateComponent implements OnInit {
  productForm: FormGroup;
  valid: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private productService: ProductService,
    private router: Router
  ) { }

  ngOnInit() {
    this.createProductForm();
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

  saveProduct() {
    this.valid = true;
    let product: IProduct = {};
    if (this.productForm.valid) {
      product.id = this.randomNumber();
      product.name = this.productForm.value.name;
      product.description = this.productForm.value.description;
      product.price = this.productForm.value.price;
      product.information = this.productForm.value.information;
      this.productService.createProduct(product);
      alert("Product saved successfully");
      this.router.navigateByUrl('/manage-products')
    }
  }

  randomNumber() {
    let number;
    number = Math.floor(Math.random() * 100) + 1;
    return number
  }

  clearProduct() {
    this.productForm.reset();
  }
}
