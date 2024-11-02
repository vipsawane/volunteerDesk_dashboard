import { Injectable } from '@angular/core';
import { Sanction } from '../../models/sanction';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from '../../../environments/environment.development';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class SanctionService {

  baseUrl : any = environment.apiURL+"/sanction";
  constructor(private http: HttpClient) {}

getAllSanction(): Observable<Sanction[]> {
  return this.http.get<Sanction[]>(`${this.baseUrl}/getAllSanction`);
}

getSanctionById(id: any): Observable<Sanction> {
  return this.http.get<Sanction>(`${this.baseUrl}/getAllSanctionById/${id}`);
}

findByLibelleSanction(libelleSanction: any): Observable<Sanction[]> {
  return this.http.get<Sanction[]>(`${this.baseUrl}?libelleSanction=${libelleSanction}`);
}

createSanction(data: any): Observable<any> {
  return this.http.post(`${this.baseUrl}/createSanction`, data);
  
}


updateSanction(id: any, data: any): Observable<any> {
  return this.http.put(`${this.baseUrl}/updateSanction/${id}`, data);
}


deleteSanction(id: any): Observable<any> {
  return this.http.delete(`${this.baseUrl}/deleteSanction/${id}`);
}

// deleteAll(): Observable<any> {
//   return this.http.delete(this.baseUrl+'');
// }






}
