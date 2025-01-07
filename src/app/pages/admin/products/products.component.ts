import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../../../services/product/product.service';

@Component({
  selector: 'app-products',
  imports: [CommonModule,FormsModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit{
isSidePanelVisible:boolean=false;
productObj:any={
  "productId": 0,
  "productSku":  "",
  "productName":  "",
  "productPrice": 0,
  "productShortName":  "",
  "productDescription":  "",
  "createdDate": new Date(),
  "deliveryTimeSpan":  "",
  "categoryId": 0,
  "productImageUrl":  "",
  "userId": 0
}
categoryList:any[]=[];
productList:any[]=[];
constructor(private productSer:ProductService){

}
ngOnInit(): void {
  this.getAllCategory();
  this.getAllProduct();
}

getAllCategory(){
  this.productSer.getCategory().subscribe((res:any)=>{
    this.categoryList=res.data;
  })
}
getAllProduct(){
  this.productSer.getProduct().subscribe((res:any)=>{
    this.productList=res.data;
  })
}

onSave(){
  debugger
  this.productSer.saveProduct(this.productObj).subscribe((res:any)=>{
if(res.result){
  alert('product created successfully')
  this.getAllProduct();
}else{
  alert(res.message)
}
  })
}
onUpdate(){
  debugger
  this.productSer.updateProduct(this.productObj).subscribe((res:any)=>{
if(res.result){
  alert('product updated successfully')
  this.getAllProduct();
  this.closeSidePanel();
}else{
  alert(res.message)
}
  })
}

onEdit(item:any){
  this.productObj=item;
  this.openSioePanel();

}
onDelete(item:any){
  const isDelete=confirm('Are you sure you want to delete')
  if(isDelete){
    this.productSer.deleteProduct(item.productId).subscribe((res:any)=>{
      if(res.result){
        alert('product deleted successfully')
        this.getAllProduct();
      }else{
        alert(res.message)
      }
        })
  }

}

openSioePanel(){
  this.isSidePanelVisible=true;
}
closeSidePanel(){
  this.isSidePanelVisible=false;
}

}
