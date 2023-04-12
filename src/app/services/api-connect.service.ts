import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from "../../environments/environment";


@Injectable({
  providedIn: 'root'
})
export class ApiConnectService {

  constructor(private http: HttpClient) { }

  requestGet(endpoint: string): Observable<any>{

    console.log('Apiconect - requestGet endpoint: '+endpoint);
    let httpOptions = {

    }

    return this.http.get<any>(endpoint, httpOptions );
    
  }

  requestHttp(endpoint: string, body?: null | any) {

    let httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
        })
    }
    
    return this.http.post(endpoint, body, httpOptions ).pipe(
        map(res => {
            return res;
        }),
        catchError(err => {
            
            return (err.error);
        })
    );
}

public request (httpMetodo:string, metodo: string,  body?: null | any): Observable<any>{
    let endpoint;
    endpoint = environment.APIEndpoint+metodo;
    console.log('Apiconect - request endpoint: '+endpoint);
    console.log('Apiconect - request httpMetodo: '+httpMetodo);
    return this.requestGet(endpoint);

}
}
