import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from '../../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Publication } from '../../models/publication';

@Injectable({
  providedIn: 'root'
})
export class PublicationService {

  baseUrl : any = environment.apiURL+"/publication";
    constructor(private http: HttpClient) {}

  getAllPublication(): Observable<Publication[]> {
    return this.http.get<Publication[]>(`${this.baseUrl}/getAllPublication`);
  }

  getPublicationById(id: any): Observable<Publication> {
    return this.http.get<Publication>(`${this.baseUrl}/getAllPublicationById/${id}`);
  }

  // create(data: any): Observable<any> {
  //   return this.http.post(this.baseUrl+"/addPublication", data);
    
  // }

  createPublication(publication: Publication, imagePublication:File): Observable<any>{
    const formData = new FormData();
    formData.append('publication', JSON.stringify(publication));
    formData.append('imagePublication', imagePublication);
    return this.http.post<any>(`${this.baseUrl}/createPublication`, formData);
  }

  updatePublication(publication: Publication, imagePublication:File, id : any): Observable<any> {
    const formData = new FormData();
    formData.append('publication', JSON.stringify(publication));
    formData.append('imagePublication', imagePublication);
    return this.http.put<any>(`${this.baseUrl}/updatePublication/${id}`, formData);
  }


  deletePublication(id: any): Observable<any> {
    return this.http.delete(`${this.baseUrl}/deletePublication/${id}`);
  }

  // deleteAll(): Observable<any> {
  //   return this.http.delete(this.baseUrl);
  // }

  findPublicationByLibelle(libellePublication: any): Observable<Publication[]> {
    return this.http.get<Publication[]>(`${this.baseUrl}?libellePublication=${libellePublication}`);
  }

}


