import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { TypeEvenement } from '../../models/typeEvenement';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TypeEvenementService {

  baseUrl : any = environment.apiURL+"/typeEvenement";
  constructor(private http: HttpClient) {}

getAll(): Observable<TypeEvenement[]> {
  return this.http.get<TypeEvenement[]>(this.baseUrl);
}

get(id: any): Observable<TypeEvenement> {
  return this.http.get<TypeEvenement>(`${this.baseUrl}/${id}`);
}

create(data: any): Observable<any> {
  return this.http.post(this.baseUrl+"/addTypeEvenement", data);
  
}

createUSer(typeEvenement: TypeEvenement): Observable<any>{
  const formData = new FormData();
  formData.append('typeEvenement', JSON.stringify(typeEvenement));
  return this.http.post<any>(this.baseUrl +'/create', formData);
}

updateUser(typeEvenement: TypeEvenement, id : number): Observable<any> {
  const formData = new FormData();
  formData.append('typeEvenement', JSON.stringify(typeEvenement));
  return this.http.put<any>(this.baseUrl +'/update/' + id, formData);
}


delete(id: number): Observable<any> {
  return this.http.delete(`${this.baseUrl+'/delete'}/${id}`);
}

// deleteAll(): Observable<any> {
//   return this.http.delete(this.baseUrl);
// }

findByLibelleTypeTypeEvenement(libelleTypeOrganisation: any): Observable<TypeEvenement[]> {
  return this.http.get<TypeEvenement[]>(`${this.baseUrl}?libelleTypeEvenement=${libelleTypeOrganisation}`);
}


}


