import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RolService {
  private API_SERVER = "http://localhost:8080/usuariorol";

  constructor(
    private httpClient: HttpClient
  ) { }
  public obtenerUsuarioRol(): Observable<any>{
    return this.httpClient.get(this.API_SERVER);
  }

}
