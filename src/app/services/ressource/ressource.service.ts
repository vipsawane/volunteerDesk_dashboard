import { Injectable } from '@angular/core';
import { Ressource } from '../../models/ressource';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from '../../../environments/environment.development';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RessourceService {

  baseUrl : any = environment.apiURL+"/ressource";
    constructor(private http: HttpClient) {}

  getAll(): Observable<Ressource[]> {
    return this.http.get<Ressource[]>(this.baseUrl);
  }

  get(id: any): Observable<Ressource> {
    return this.http.get<Ressource>(`${this.baseUrl}/${id}`);
  }

  create(data: any): Observable<any> {
    return this.http.post(this.baseUrl+"/addRessource", data);
    
  }

  createRessource(ressource: Ressource, imageRessource:File): Observable<any>{
    const formData = new FormData();
    formData.append('ressource', JSON.stringify(ressource));
    formData.append('imageRessource', imageRessource);
    return this.http.post<any>(this.baseUrl +'/create', formData);
  }

  updateRessource(ressource: Ressource, imageRessource:File, id : any): Observable<any> {
    const formData = new FormData();
    formData.append('ressource', JSON.stringify(ressource));
    formData.append('imageRessource', imageRessource);
    return this.http.put<any>(this.baseUrl +'/update/' + id, formData);
  }


  delete(id: any): Observable<any> {
    return this.http.delete(`${this.baseUrl+'/delete'}/${id}`);
  }

  // deleteAll(): Observable<any> {
  //   return this.http.delete(this.baseUrl);
  // }

  findByLibelleRessource(libelleRessource: any): Observable<Ressource[]> {
    return this.http.get<Ressource[]>(`${this.baseUrl}?libelleRessource=${libelleRessource}`);
  }

}

