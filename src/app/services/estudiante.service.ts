import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EstudianteService {
  private API_SERVER = "http://localhost:8080/estudiante/";

  constructor(private httpClient: HttpClient) { }



  public obtenerEstudiantes(): Observable<any>{
    return this.httpClient.get(this.API_SERVER);
  }

  public subirArchivo(estudiante:any): Observable<any>{
    return this.httpClient.post(this.API_SERVER,estudiante);
  }

  /*public deleteEstudiante(id):Observable<any>{
    return this.httpClient.delete(this.API_SERVER + "delete/"+codigo);
  }*/

}
