import { DetailsEvenement } from './../../models/detailsEvenement';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DetailsEvenementService {

  baseUrl : any = environment.apiURL+"/datailsEvenement";


  constructor(private http: HttpClient) {}

  getAll(): Observable<DetailsEvenement[]> {
    return this.http.get<DetailsEvenement[]>(this.baseUrl);
  }

  get(id: any): Observable<DetailsEvenement> {
    return this.http.get<DetailsEvenement>(`${this.baseUrl}/${id}`);
  }

  createDetailsEvenement(detailsEvenement: DetailsEvenement, photo:File): Observable<any>{
    const formData = new FormData();
    formData.append('detailsEvenement', JSON.stringify(detailsEvenement));
    return this.http.post<any>(this.baseUrl +'/create', formData);
  }

  updateDetailsEvenement(detailsEvenement: DetailsEvenement, id : any): Observable<any> {
    const formData = new FormData();
    formData.append('detailsEvenement', JSON.stringify(detailsEvenement));
    return this.http.put<any>(this.baseUrl +'/update/' + id, formData);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(this.baseUrl);
  }

  findByLieuEvenement(lieuEvenement: any): Observable<DetailsEvenement[]> {
    return this.http.get<DetailsEvenement[]>(`${this.baseUrl}?lieuEvenement=${lieuEvenement}`);
  }

  findByOrganisateur(organisateur: any): Observable<DetailsEvenement[]> {
    return this.http.get<DetailsEvenement[]>(`${this.baseUrl}?organisateur=${organisateur}`);
  }

  
}