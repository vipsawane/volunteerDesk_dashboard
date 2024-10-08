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

getAll(): Observable<Sanction[]> {
  return this.http.get<Sanction[]>(this.baseUrl);
}

get(id: any): Observable<Sanction> {
  return this.http.get<Sanction>(`${this.baseUrl}/${id}`);
}

findByLibelleSanction(libelleSanction: any): Observable<Sanction[]> {
  return this.http.get<Sanction[]>(`${this.baseUrl}?libelleSanction=${libelleSanction}`);
}

create(data: any): Observable<any> {
  return this.http.post(this.baseUrl+"/addSanction", data);
  
}


update(id: any, data: any): Observable<any> {
  return this.http.put(`${this.baseUrl+'/update'}/${id}`, data);
}


delete(id: any): Observable<any> {
  return this.http.delete(`${this.baseUrl+'/delete'}/${id}`);
}

// deleteAll(): Observable<any> {
//   return this.http.delete(this.baseUrl+'');
// }






}
