import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FacultadService {

  private API_SERVER = "http://localhost:8080/facultad";

  constructor(
    private httpClient: HttpClient
  ) { }


  public guardarFacultad(facultad:any): Observable<any>{
    return this.httpClient.post(this.API_SERVER,facultad);
  }

}
