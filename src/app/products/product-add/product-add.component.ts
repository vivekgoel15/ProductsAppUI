import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from '../../product.service';
import { NotificationService } from '../../notification.service';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {

  angForm: FormGroup;
  constructor(private fb: FormBuilder, private ps: ProductService, private ns: NotificationService, private router: Router) {
    this.createForm();
  }

  createForm() {
    this.angForm = this.fb.group({
      ProductName: ['', Validators.required],
      Price: ['', Validators.required]
    });
  }

  addProduct(ProductName: any, Price: any) {
    this.ps.addProduct(ProductName, Price.replace('₹', '').replace(/,/g, '').trim());
    this.ns.showSuccess('Product added successfully!', 'Success');
    this.router.navigate(['products']);
  }

  ngOnInit(): void {
  }

}
