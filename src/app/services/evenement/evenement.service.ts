import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient } from '@angular/common/http';
import { Evenement } from '../../models/evenement';
import { TypeEvenement } from '../../models/detailsEvenement';



@Injectable({
  providedIn: 'root'
})
export class EvenementService {

  baseUrl : any = environment.apiURL+"/evenement";


  constructor(private http: HttpClient) {}

  getAll(): Observable<Evenement[]> {
    return this.http.get<Evenement[]>(this.baseUrl);
  }

  get(id: any): Observable<Evenement> {
    return this.http.get<Evenement>(`${this.baseUrl}/${id}`);
  }

  createUSer(evenement: Evenement, photo:File): Observable<any>{
    const formData = new FormData();
    formData.append('evenement', JSON.stringify(evenement));
    formData.append('photo', photo);
    return this.http.post<any>(this.baseUrl +'/create', formData);
  }

  updateUser(evenement: Evenement, image:File, id : any): Observable<any> {
    const formData = new FormData();
    formData.append('evenement', JSON.stringify(evenement));
    formData.append('image', image);
    return this.http.put<any>(this.baseUrl +'/update/' + id, formData);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(this.baseUrl);
  }

  findByLibelleEvenement(libelleEvenement: any): Observable<Evenement[]> {
    return this.http.get<Evenement[]>(`${this.baseUrl}?libelleEvenement=${libelleEvenement}`);
  }

  findByTypeEvenement(TypeEvenement: any): Observable<TypeEvenement[]> {
    return this.http.get<TypeEvenement[]>(`${this.baseUrl}?TypeEvenement=${TypeEvenement}`);
  }

  
}