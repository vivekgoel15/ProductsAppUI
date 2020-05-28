import { Component, OnInit } from '@angular/core';
import Product from '../../Product';
import { Router } from '@angular/router';
import { ProductService } from '../../product.service';
import { NotificationService } from '../../notification.service';

@Component({
  selector: 'app-product-get',
  templateUrl: './product-get.component.html',
  styleUrls: ['./product-get.component.css']
})
export class ProductGetComponent implements OnInit {

  products: Product[];
  constructor(private router: Router, private ps: ProductService, private ns: NotificationService) { }

  ngOnInit(): void {
    this.ps.getProducts().subscribe((data: Product[]) => {
        this.products = data;
      });
  }

  deleteProduct(id: any, index: any) {
      this.ps.deleteProduct(id).subscribe(res => {
        this.products.splice(index, 1);
        this.ns.showSuccess('Product deleted successfully!', 'Success');
        this.router.navigate(['products']);
      });
  }

}
