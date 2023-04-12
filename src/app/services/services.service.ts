import { Injectable } from '@angular/core';
import { ApiConnectService } from './api-connect.service';


@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  private options: any = { };

  constructor(private apiConnect: ApiConnectService) { }

  version (){
    this.options = {}
    return this.apiConnect.request('GET','version', this.options);
  }


  login(usuario: string, password: string){
    this.options = {
      usuario: usuario,
      password: password
    }
    return this.apiConnect.request('POST','login', this.options);
  }

  agregarUsuario(){
    this.options = {}
    return this.apiConnect.request('POST','agregarUsuario', this.options);
  }

  listaUsuarios(){
    return this.apiConnect.request('GET','usuario/listar');
  }


}
