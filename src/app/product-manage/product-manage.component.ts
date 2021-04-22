import { Component, OnInit } from '@angular/core';
import { IProduct } from '../model/product.model';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-product-manage',
  templateUrl: './product-manage.component.html',
  styleUrls: ['./product-manage.component.scss']
})
export class ProductManageComponent implements OnInit {
  products: IProduct[] = [];

  constructor(public productService: ProductService) { }

  ngOnInit() {
    this.getProductList();
  }

  getProductList() {
    this.products = this.productService.productList;
  }

  deleteProduct(index) {
    if (confirm("Are you sure to delete " + this.products[index].name + " ?")) {
      if (index !== -1) {
        this.products.splice(index, 1);
        alert("Product deleted succesfully");
      }
    }
  }
}
