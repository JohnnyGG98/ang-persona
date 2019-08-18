import { Injectable } from '@angular/core';
import { Person } from '../models/person.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PersonService {

  /*Url que usaremos para consumir el servicio*/
  private url = 'http://localhost:9898/api/persona/';
  private ps: Array<Person>;


  constructor(private http: HttpClient) { }

  /*Obtenemos todas las personas */
  getAll(): Observable<Person[]> {
    return this.http.get<Person[]>(this.url);
  }
}
