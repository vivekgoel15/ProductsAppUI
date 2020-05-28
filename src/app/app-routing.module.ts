import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductAddComponent } from './products/product-add/product-add.component';
import { ProductEditComponent } from './products/product-edit/product-edit.component';
import { ProductGetComponent } from './products/product-get/product-get.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'products',
    component: ProductGetComponent
  },
  {
    path: 'products/create',
    component: ProductAddComponent
  },
  {
    path: 'products/:id/update',
    component: ProductEditComponent
  },
  {
    path: 'products/edit/:id',
    component: ProductEditComponent
  },
  {
    path: 'about',
    component: AboutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    onSameUrlNavigation: 'reload'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
