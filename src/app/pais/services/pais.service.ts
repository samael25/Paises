import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SerchPaises } from '../interfaces/pais.interface';



@Injectable({
  providedIn: 'root'
})
export class PaisService {
  private apiUrl: string = 'https://restcountries.com/v2'; 
  constructor( private http: HttpClient) { }

  buscarPais( termino: string): Observable<SerchPaises[]> {
    const url = `${ this.apiUrl }/name/${ termino }`;
    return this.http.get<SerchPaises[]>(url);
  }

  buscarCapital( termino: string): Observable<SerchPaises[]> {
    const url = `${ this.apiUrl }/capital/${ termino }`;
    return this.http.get<SerchPaises[]>(url);
  }

  getPaisPorAlpha( id: string ): Observable<SerchPaises> {
    const url = `${ this.apiUrl }/alpha/${ id }`;
    return this.http.get<SerchPaises>(url);
  }

  buscarRegion(region:string): Observable<SerchPaises[]> {
    const url = `${ this.apiUrl }/regionalbloc/${ region }`;
    return this.http.get<SerchPaises[]>(url);
  }

}
