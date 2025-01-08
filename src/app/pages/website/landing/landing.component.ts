import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../services/product/product.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-landing',
  imports: [CommonModule,FormsModule,RouterOutlet,RouterLink],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css'
})
export class LandingComponent implements OnInit{
 
  categoryList:any[]=[];
  cartList:any[]=[];
constructor(private productSrv:ProductService,private router:Router){
  this.productSrv.cartUpdated$?.subscribe((res:any)=>{
    this.getAllCart();
  })
}
ngOnInit(): void {
 this.getAllCategory();
 this.getAllCart();
}
//get all category
getAllCategory(){
  this.productSrv.getCategory().subscribe((res:any)=>{
    this.categoryList=res.data;
  })
}
//get all cart
getAllCart(){
  this.productSrv.getCart(379).subscribe((res:any)=>{
    this.cartList=res.data;
  })
}
remove(cartId:number){
  const isRemove=confirm('Are you sure you want to remove cart')
  if(isRemove){
    this.productSrv.deleteProductByCartId(cartId).subscribe((res:any)=>{
if(res.result){
  alert('product successfully remove from cart')
  this.getAllCart();
}else{
  alert(res.message)
}
    })
  }
 
}

navigateToProductById(id:number){
this.router.navigate(['/productCategory',id])
}
onLogin(){
  this.router.navigate(['/login'])
}

}
