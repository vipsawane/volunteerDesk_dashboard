import { Candidature } from './../../models/user';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CandidatureService {

  baseUrl : any = environment.apiURL+"/candidature";
  constructor(private http: HttpClient) {}

getAll(): Observable<Candidature[]> {
  return this.http.get<Candidature[]>(this.baseUrl);
}

get(id: any): Observable<Candidature> {
  return this.http.get<Candidature>(`${this.baseUrl}/${id}`);
}

create(data: any): Observable<any> {
  return this.http.post(this.baseUrl+"/addCandidature", data);
  
}

createCandidature(candidature: Candidature): Observable<any>{
  const formData = new FormData();
  formData.append('candidature', JSON.stringify(candidature));
  return this.http.post<any>(this.baseUrl +'/create', formData);
}

updateUser(candidature: Candidature, id : number): Observable<any> {
  const formData = new FormData();
  formData.append('candidature', JSON.stringify(candidature));
  return this.http.put<any>(this.baseUrl +'/candidature/' + id, formData);
}


delete(id: number): Observable<any> {
  return this.http.delete(`${this.baseUrl+'/delete'}/${id}`);
}

// deleteAll(): Observable<any> {
//   return this.http.delete(this.baseUrl);
// }

findByLibelleCandidature(libelleCandidature: any): Observable<Candidature[]> {
  return this.http.get<Candidature[]>(`${this.baseUrl}?libelleCandidature=${libelleCandidature}`);
}

findByEtatCandidature(etatCandidature: any): Observable<Candidature[]> {
  return this.http.get<Candidature[]>(`${this.baseUrl}?etatCandidature=${etatCandidature}`);
}




}



