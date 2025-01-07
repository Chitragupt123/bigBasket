import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../services/product/product.service';
import { map, Observable, pipe } from 'rxjs';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-category',
  imports: [CommonModule,FormsModule],
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent implements OnInit {
  categoryObj:any={
   "CategoryId": 0,
    "CategoryName": "",
    "ParentCategoryId": 0,
    "UserId": 0
  }
//  product$:Observable<any>
 categoryList:any[]=[];

constructor(private productSer:ProductService){
// this.product$=this.productSer.getCategory().pipe(
//   map((item:any)=>{
// return item.data;
// })
// );
}
ngOnInit(): void {
  this.getAllCategory();
}

getAllCategory(){
  this.productSer.getCategory().subscribe((res:any)=>{
    this.categoryList=res.data;
  })
}

onSave(){
  debugger
  this.productSer.saveCategory(this.categoryObj).subscribe((res:any)=>{
if(res.result){
  alert('Category created successfully')
  this.getAllCategory();
}else{
  alert(res.message)
}
  })
}
onDelete(item:any){
  debugger
  const isDelete=confirm('Are you sure you want to delete')
  if(isDelete){
    this.productSer.deleteCategory(item.categoryId).subscribe((res:any)=>{
      debugger
      if(res.result){
        alert('Category created successfully')
        this.getAllCategory();
      }else{
        alert(res.message)
      }
        })
  }
 
}

onEdit(item:any){
  debugger
  this.categoryObj=item;
}
onReset(){
  this.categoryObj={
    "CategoryId": 0,
    "CategoryName": "",
    "ParentCategoryId": 0,
    "UserId": 0
  }
}


}

