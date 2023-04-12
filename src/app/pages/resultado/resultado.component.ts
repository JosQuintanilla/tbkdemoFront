import { Component, OnInit } from '@angular/core';
import { ServicesService } from 'src/app/services/services.service';

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html',
  styleUrls: ['./resultado.component.css']
})
export class ResultadoComponent implements OnInit {

  usuario={
    nombre: '',
    email: ''
  }

  listaUsuarios=[];

  constructor(private service: ServicesService) { }

  ngOnInit(): void {

    this.service.listaUsuarios().subscribe((response)=> {
      console.log("ResultadoComponent -  listaUsuarios - response: ",response);
      this.listaUsuarios = response;

      console.log("ResultadoComponent -  listaUsuarios - listaUsuarios: ",this.listaUsuarios);

      console.log("ResultadoComponent -  listaUsuarios - usuario: ",this.listaUsuarios[0]);
    }, (err)=>{
      console.log("ResultadoComponent -  listaUsuarios -  error: ",err);
    });
  }

}
