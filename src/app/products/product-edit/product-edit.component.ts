import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../../product.service';
import { NotificationService } from '../../notification.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  angForm: FormGroup;
  product: any = {};

  constructor(private route: ActivatedRoute, private router: Router, private ps: ProductService,
              private ns: NotificationService, private fb: FormBuilder) {
    this.createForm();
  }

  createForm() {
    this.angForm = this.fb.group({
      ProductName: ['', Validators.required],
      Price: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.ps.editProduct(params[`id`]).subscribe(res => {
        this.product = res;
      });
    });
  }

  updateProduct(ProductName, Price) {
    this.route.params.subscribe(params => {
      this.ps.updateProduct(ProductName, Price.replace('₹', '').replace(/,/g, '').trim(), params.id);
      this.ns.showSuccess('Product updated successfully!', 'Success');
      this.router.navigate(['products']);
    });
  }
}
