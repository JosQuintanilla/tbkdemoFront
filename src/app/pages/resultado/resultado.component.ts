import { Component, OnInit } from '@angular/core';
import { ServicesService } from 'src/app/services/services.service';

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html',
  styleUrls: ['./resultado.component.css']
})
export class ResultadoComponent implements OnInit {

  constructor(private service: ServicesService) { }

  ngOnInit(): void {

    this.service.listaUsuarios().subscribe((response)=> {
      console.log("ResultadoComponent -  listaUsuarios - response: ",response);
    }, (err)=>{
      console.log("ResultadoComponent -  listaUsuarios -  error: ",err);
    });
  }

}
