import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from '../../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Organisation } from '../../models/organisation';
import { TypeOrganisation } from '../../models/typeOrganisation'; // Chemin correct pour TypeOrganisation



@Injectable({
  providedIn: 'root'
})
export class OrganisationService {

  baseUrl : any = environment.apiURL;
  constructor(private http: HttpClient) {}

getAll(): Observable<Organisation[]> {
  return this.http.get<Organisation[]>(this.baseUrl);
}

get(id: any): Observable<Organisation> {
  return this.http.get<Organisation>(`${this.baseUrl+"/organisation"}/${id}`);
}

create(data: any): Observable<any> {
  return this.http.post(this.baseUrl+"/addOrganisation", data);
  
}

createOrganisation(organisation: Organisation, logo:File): Observable<any>{
  const formData = new FormData();
  formData.append('organisation', JSON.stringify(organisation));
  formData.append('logo', logo);
  return this.http.post<any>(this.baseUrl +'/create', formData);
}

updateOrganisation(organisation: Organisation, logo:File, id : any): Observable<any> {
  const formData = new FormData();
  formData.append('organisation', JSON.stringify(organisation));
  formData.append('logo', logo);
  return this.http.put<any>(this.baseUrl +'/update/' + id, formData);
}


delete(id: any): Observable<any> {
  return this.http.delete(`${this.baseUrl+'/delete'}/${id}`);
}

deleteAll(): Observable<any> {
  return this.http.delete(this.baseUrl);
}

findByRaisonSocial(raisonSocial: any): Observable<Organisation[]> {
  return this.http.get<Organisation[]>(`${this.baseUrl}?raisonSocial=${raisonSocial}`);
}

findByTypeOrganisation(TypeOrganisation: any): Observable<Organisation[]> {
  return this.http.get<Organisation[]>(`${this.baseUrl}?TypeOrganisation=${TypeOrganisation}`);
}
}

