import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductCreateComponent } from './product-create/product-create.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductManageComponent } from './product-manage/product-manage.component';
import { ProductUpdateComponent } from './product-update/product-update.component';


const routes: Routes = [
  {
    path: "",
    redirectTo: 'manage-products',
    pathMatch: 'full'
  },
  {
    path: 'manage-products',
    component: ProductManageComponent
  },
  {
    path: 'create-product',
    component: ProductCreateComponent
  },
  {
    path: ':productId/edit-product',
    component: ProductUpdateComponent
  },
  {
    path: ':productId/view-product',
    component: ProductDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
