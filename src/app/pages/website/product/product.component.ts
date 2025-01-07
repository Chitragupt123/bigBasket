import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../services/product/product.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product',
  imports: [CommonModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit{
  productList:any[]=[];
  constructor(private productSrv:ProductService ){

  }
  ngOnInit(): void {
    this.getAllProducts();
  }
  getAllProducts(){
    this.productSrv.getProduct().subscribe((res:any)=>{
  this.productList=res.data;
    })
  }
}
