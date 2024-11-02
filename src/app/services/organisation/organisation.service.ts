import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from '../../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Organisation } from '../../models/organisation';
import { TypeOrganisation } from '../../models/typeOrganisation';



@Injectable({
  providedIn: 'root'
})
export class OrganisationService {

  baseUrl : any = environment.apiURL+"/organisation";
  constructor(private http: HttpClient) {}

getAllOrganisation(): Observable<Organisation[]> {
  return this.http.get<Organisation[]>(`${this.baseUrl}/getAllOrganisation`);
}

getOrganisationById(id: any): Observable<Organisation> {
  return this.http.get<Organisation>(`${this.baseUrl}/getAllOrganisationById}/${id}`);
}

// create(data: any): Observable<any> {
//   return this.http.post(`${this.baseUrl}/create`, data);
  
// }

createOrganisation(organisation: Organisation, logo:File): Observable<any>{
  const formData = new FormData();
  formData.append('organisation', JSON.stringify(organisation));
  formData.append('logo', logo);
  return this.http.post<any>(`${this.baseUrl}/createOrganisation`, formData);
}

updateOrganisation(organisation: Organisation, logo:File, id : any): Observable<any> {
  const formData = new FormData();
  formData.append('organisation', JSON.stringify(organisation));
  formData.append('logo', logo);
  return this.http.put<any>(`${this.baseUrl}/updateOrganisation/${id}`, formData);
}


deleteOrganisation(id: any): Observable<any> {
  return this.http.delete(`${this.baseUrl}/deleteOrganisation/${id}`);
}

// deleteAll(): Observable<any> {
//   return this.http.delete(this.baseUrl);
// }

findOrganisaByRaisonSocial(raisonSocial: any): Observable<Organisation[]> {
  return this.http.get<Organisation[]>(`${this.baseUrl}?raisonSocial=${raisonSocial}`);
}

findByTypeOrganisation(TypeOrganisation: any): Observable<Organisation[]> {
  return this.http.get<Organisation[]>(`${this.baseUrl}?TypeOrganisation=${TypeOrganisation}`);
}
}

