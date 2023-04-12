import { Component, OnInit } from '@angular/core';
import { ServicesService } from 'src/app/services/services.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  version = '0.0.0';

  constructor(private service: ServicesService) { }

  ngOnInit(): void {
      this.service.version().subscribe((response)=> {
        console.log("Login version: ",response);
        this.version = response.payload;
      }, (err)=>{
        console.log("Login error: ",err);
      });
  }




}
