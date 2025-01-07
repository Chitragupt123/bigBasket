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
constructor(private productSrv:ProductService,private router:Router){

}
ngOnInit(): void {
 this.getAllCategory();
}

getAllCategory(){
  this.productSrv.getCategory().subscribe((res:any)=>{
    this.categoryList=res.data;
  })
}

navigateToProductById(id:number){
this.router.navigate(['/productCategory',id])
}
onLogin(){
  this.router.navigate(['/login'])
}

}
