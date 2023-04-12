import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServicesService } from 'src/app/services/services.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  version = '0.0.0';
  userName = "";
  password = "";

  constructor(private service: ServicesService, private routerPage: Router) { }

  ngOnInit(): void {
      this.service.version().subscribe((response)=> {
        console.log("Login version: ",response);
        this.version = response.payload;
      }, (err)=>{
        console.log("Login error: ",err);
      });
  }


  login (){
    console.log("Login login userName: ",this.userName);
    console.log("Login login password: ",this.password);
    this.service.login(this.userName, this.password).subscribe((response)=> {
      console.log("Login login response: ",response);
      this.routerPage.navigateByUrl('resultado');
    }, (err)=>{
      console.log("Login login error: ",err);
    });
  }




}
