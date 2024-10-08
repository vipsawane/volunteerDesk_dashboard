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

  getAll(): Observable<Publication[]> {
    return this.http.get<Publication[]>(this.baseUrl);
  }

  get(id: any): Observable<Publication> {
    return this.http.get<Publication>(`${this.baseUrl}/${id}`);
  }

  create(data: any): Observable<any> {
    return this.http.post(this.baseUrl+"/addPublication", data);
    
  }

  createPublication(publication: Publication, imagePublication:File): Observable<any>{
    const formData = new FormData();
    formData.append('publication', JSON.stringify(publication));
    formData.append('imagePublication', imagePublication);
    return this.http.post<any>(this.baseUrl +'/create', formData);
  }

  updatePublication(publication: Publication, imagePublication:File, id : any): Observable<any> {
    const formData = new FormData();
    formData.append('publication', JSON.stringify(publication));
    formData.append('imagePublication', imagePublication);
    return this.http.put<any>(this.baseUrl +'/update/' + id, formData);
  }


  delete(id: any): Observable<any> {
    return this.http.delete(`${this.baseUrl+'/delete'}/${id}`);
  }

  // deleteAll(): Observable<any> {
  //   return this.http.delete(this.baseUrl);
  // }

  findByLibellePublication(libellePublication: any): Observable<Publication[]> {
    return this.http.get<Publication[]>(`${this.baseUrl}?libellePublication=${libellePublication}`);
  }

}


