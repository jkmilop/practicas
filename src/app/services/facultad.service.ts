import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FacultadService {

  private API_SERVER = "http://localhost:8080/facultad/";

  constructor(
    private httpClient: HttpClient
  ) { }


  public obtenerFacultad(): Observable<any>{
    return this.httpClient.get(this.API_SERVER);
  }

}
