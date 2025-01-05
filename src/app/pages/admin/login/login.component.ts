import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginObj:any={
    email:'',
    password:""

  };
  constructor(private router: Router) {}

  onLogin(){
    debugger
if(this.loginObj.email=="chitra@gmail.com" && this.loginObj.password=="123"){
  this.router.navigateByUrl('products')
alert("successfully login")
}else{
  alert("Invalid password")
}
  }

}
