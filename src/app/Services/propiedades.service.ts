import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Propiedad } from '../Interfaces/Propiedad';

@Injectable({
  providedIn: 'root'
})
export class PropiedadesService {

  api = "http://localhost:8080/api/propiedad";
  htpp = inject(HttpClient);
  constructor() { }

  getPropiedades():Observable<Propiedad[]>{
  const url= `${this.api}/traer`;
    return this.htpp.get<Propiedad[]>(url);
  }

  getPropiedadesByid(id: number):Observable<Propiedad>
  {
    const url = `${this.api}/traer/${id}`;
    return this.htpp.get<Propiedad>(url);
  }
}
