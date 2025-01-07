import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-category-products',
  imports: [],
  templateUrl: './category-products.component.html',
  styleUrl: './category-products.component.css'
})
export class CategoryProductsComponent {
constructor(private activatedRoute:ActivatedRoute ){
  this.activatedRoute.params.subscribe(res=>{
    debugger
  })
}
}
