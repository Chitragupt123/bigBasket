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
  addToCart(productId:number){
  const cartObj={
      "CartId": 0,
      "CustId": 379,
      "ProductId": productId,
      "Quantity": 1,
      "AddedDate": new Date(),
    }
    this.productSrv.saveCart(cartObj).subscribe((res:any)=>{
if(res.result){
  alert('products added to cart')
  this.productSrv.cartUpdated$?.next(true);
}
else{
  alert(res.message)
}
    })
  }
}
