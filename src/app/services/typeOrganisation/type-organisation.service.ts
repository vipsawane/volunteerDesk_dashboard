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

getAllTypeOrganisation(): Observable<TypeOrganisation[]> {
  return this.http.get<TypeOrganisation[]>(`${this.baseUrl}/getAllTypeOrganisation`);
}

getTypeOrganisationById(id: any): Observable<TypeOrganisation> {
  return this.http.get<TypeOrganisation>(`${this.baseUrl}/getAllTypeOrganisationById/${id}`);
}

// create(data: any): Observable<any> {
//   return this.http.post(this.baseUrl+"/addTypeOrganisation", data);
  
// }

createTypeOrganisation(typeOrganisation: TypeOrganisation): Observable<any>{
  const formData = new FormData();
  formData.append('typeOrganisation', JSON.stringify(typeOrganisation));
  return this.http.post<any>(`${this.baseUrl}/createTypeOrganisation`, formData);
}

updateTypeOrganisation(typeOrganisation: TypeOrganisation, id : number): Observable<any> {
  const formData = new FormData();
  formData.append('typeOrganisation', JSON.stringify(typeOrganisation));
  return this.http.put<any>(`${this.baseUrl}/updateTypeOrganisation/${id}`, formData);
}


deleteTypeOrganisation(id: number): Observable<any> {
  return this.http.delete(`${this.baseUrl}/deleteTypeOrganisation}/${id}`);
}

// deleteAll(): Observable<any> {
//   return this.http.delete(this.baseUrl);
// }

findByLibelleTypeOrganisation(libelleTypeOrganisation: any): Observable<TypeOrganisation[]> {
  return this.http.get<TypeOrganisation[]>(`${this.baseUrl}?libelleTypeOrganisation=${libelleTypeOrganisation}`);
}


}

