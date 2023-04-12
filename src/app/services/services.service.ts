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

  listaRolesPorAcciones (idRol: number){
    this.options = {
       idRol: idRol
    }
    return this.apiConnect.request('GET','listaRolesPorAcciones', this.options);
}
}
