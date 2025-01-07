import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Constant } from '../constant/constant';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }
  saveCategory(obj:any){
    return this.http.post(Constant.API_END_POINT+Constant.METHODS.CREATE_CATEGORY,obj)
  }
  getCategory(){
    return this.http.get(Constant.API_END_POINT+Constant.METHODS.GET_ALL_CATEGORY)
  }
  getProduct(){
    return this.http.get(Constant.API_END_POINT+Constant.METHODS.GET_ALL_PRODUCT)
  }
  saveProduct(obj:any){
    return this.http.post(Constant.API_END_POINT+Constant.METHODS.CREATE_PRODUCT,obj)
  }
  updateProduct(obj:any){
    return this.http.post(Constant.API_END_POINT+Constant.METHODS.UPDATE_PRODUCT,obj) 
  }
  deleteProduct(id:any){
    return this.http.get(Constant.API_END_POINT+Constant.METHODS.DELETE_PRODUCT+id) 
  }
  deleteCategory(id:any){
    return this.http.get(Constant.API_END_POINT+Constant.METHODS.DELETE_CATEGORY+id) 
  }
  
}