import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient } from '@angular/common/http';
import { Candidature } from '../../models/candidature';
import { Evenement } from '../../models/evenement';


@Injectable({
  providedIn: 'root'
})
export class CandidatureService {

  baseUrl : any = environment.apiURL+"/candidature";
  constructor(private http: HttpClient) {}

  getAllCandidature(): Observable<Candidature[]> {
  return this.http.get<Candidature[]>(`${this.baseUrl}/getAllCandidature`);
}

getCandidatureById(id: any): Observable<Candidature> {
  return this.http.get<Candidature>(`${this.baseUrl}/getAllCandidatureById/${id}`);
}

// create(data: any): Observable<any> {
//   return this.http.post(`${this.baseUrl}/addCandidature`, data);
  
// }

createCandidature(candidature: Candidature): Observable<any>{
  const formData = new FormData();
  formData.append('candidature', JSON.stringify(candidature));
  return this.http.post<any>(`${this.baseUrl}/createCandidature`,formData);
}

updateCandidature(candidature: Candidature, id : number): Observable<any> {
  const formData = new FormData();
  formData.append('candidature', JSON.stringify(candidature));
  return this.http.put<any>(`${this.baseUrl}/updateCandidature/${id} `, formData);
}


deleteCandidature(id: number): Observable<any> {
  return this.http.delete(`${this.baseUrl}/deleteCandidature}/${id}`);
}

// deleteAll(): Observable<any> {
//   return this.http.delete(this.baseUrl);
// }

findCandidatureByLibelle(libelleCandidature: any): Observable<Candidature[]> {
  return this.http.get<Candidature[]>(`${this.baseUrl}?libelleCandidature=${libelleCandidature}`);
}

findCandidatureByEvenement(libelleEvenement: string): Observable<Candidature[]> {
  return this.http.get<Candidature[]>(`${this.baseUrl}/candidature?libelleEvenement=${libelleEvenement}`);
}


findByEtatCandidature(etatCandidature: any): Observable<Candidature[]> {
  return this.http.get<Candidature[]>(`${this.baseUrl}?etatCandidature=${etatCandidature}`);
}

findAcceptedCandidaturesByEvenement(libelle: String): Observable<Candidature[]> {
  const etatCandidature = 'accepté';  
  return this.http.get<Candidature[]>(
    `${this.baseUrl}/getByEvenementAndEtat/${libelle}?etatCandidature=${etatCandidature}`);
}



}



