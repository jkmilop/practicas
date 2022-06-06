import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProgramaService {

  private API_SERVER = "http://localhost:8080/programa";

  constructor(
    private httpClient: HttpClient
  ) { }


  public guardarPrograma(programa:any): Observable<any>{
    return this.httpClient.post(this.API_SERVER,programa);
  }
  public obtenerPrograma(): Observable<any>{
    return this.httpClient.get(this.API_SERVER);
  }

}
