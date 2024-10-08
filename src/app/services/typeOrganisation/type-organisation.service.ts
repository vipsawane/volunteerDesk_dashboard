import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { TypeOrganisation } from '../../models/typeOrganisation';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TypeOrganisationService {

  baseUrl : any = environment.apiURL+"/typeOrganisation";
  constructor(private http: HttpClient) {}

getAll(): Observable<TypeOrganisation[]> {
  return this.http.get<TypeOrganisation[]>(this.baseUrl);
}

get(id: any): Observable<TypeOrganisation> {
  return this.http.get<TypeOrganisation>(`${this.baseUrl}/${id}`);
}

create(data: any): Observable<any> {
  return this.http.post(this.baseUrl+"/addTypeOrganisation", data);
  
}

createUSer(typeOrganisation: TypeOrganisation): Observable<any>{
  const formData = new FormData();
  formData.append('typeOrganisation', JSON.stringify(typeOrganisation));
  return this.http.post<any>(this.baseUrl +'/create', formData);
}

updateUser(typeOrganisation: TypeOrganisation, id : number): Observable<any> {
  const formData = new FormData();
  formData.append('typeOrganisation', JSON.stringify(typeOrganisation));
  return this.http.put<any>(this.baseUrl +'/update/' + id, formData);
}


delete(id: number): Observable<any> {
  return this.http.delete(`${this.baseUrl+'/delete'}/${id}`);
}

// deleteAll(): Observable<any> {
//   return this.http.delete(this.baseUrl);
// }

findByLibelleTypeOrganisation(libelleTypeOrganisation: any): Observable<TypeOrganisation[]> {
  return this.http.get<TypeOrganisation[]>(`${this.baseUrl}?libelleTypeOrganisation=${libelleTypeOrganisation}`);
}


}

