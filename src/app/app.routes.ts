import { Routes } from '@angular/router';
import { LoginComponent } from './pages/admin/login/login.component';
import { LayoutComponent } from './pages/admin/layout/layout.component';
import { ProductsComponent } from './pages/admin/products/products.component';
import { CategoryComponent } from './pages/admin/category/category.component';
import { LandingComponent } from './pages/website/landing/landing.component';
import { CategoryProductsComponent } from './pages/website/category-products/category-products.component';
import { ProductComponent } from './pages/website/product/product.component';

export const routes: Routes = [
    {
        path:'',
        redirectTo:'shop/allproduct',
        pathMatch:'full'
    },
    
    {
        path:'',
        component:LandingComponent,
        children:[
           
            {
                path:'allproduct',
                component:ProductComponent
            },
            {
                path:'productCategory/:id',
                component:CategoryProductsComponent
            },
        ]
    },
    {
        path:'login',
        component:LoginComponent
    },
   
    
    {
        path:'',
        component:LayoutComponent,
        children:[
            {
                path:'products',
                component:ProductsComponent
            },
            {
                path:'category',
                component:CategoryComponent
            },
            
        ]
    }
];
