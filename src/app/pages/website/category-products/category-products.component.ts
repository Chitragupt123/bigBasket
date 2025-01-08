import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../../services/product/product.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-category-products',
  imports: [CommonModule,FormsModule],
  templateUrl: './category-products.component.html',
  styleUrl: './category-products.component.css'
})
export class CategoryProductsComponent {
  activeCategoryId:number=0;
  productByCategoryList:any[]=[];
constructor(private activatedRoute:ActivatedRoute , private productSrv:ProductService){
  this.activatedRoute.params.subscribe((res:any)=>{
    this.activeCategoryId=res.id;
    this.loadProductByCategory();
  })
}
loadProductByCategory(){
  debugger
  this.productSrv.getCategoryById( this.activeCategoryId).subscribe((res:any)=>{
    this.productByCategoryList=res.data;
  })
}

}
