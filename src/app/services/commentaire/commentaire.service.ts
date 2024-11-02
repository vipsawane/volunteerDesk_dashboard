import { Commentaire } from './../../models/commentaire';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment.development';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommentaireService {

  baseUrl : any = environment.apiURL+"/commentaire";
  constructor(private http: HttpClient) {}

getAllCommentaire(): Observable<Commentaire[]> {
  return this.http.get<Commentaire[]>(`${this.baseUrl}/getAllCommentaire`);
}

getCommentaireById(id: any): Observable<Commentaire> {
  return this.http.get<Commentaire>(`${this.baseUrl}/getAllCommentaireById/${id}`);
}

// create(data: any): Observable<any> {
//   return this.http.post(this.baseUrl+"/addCommentaire", data);
  
// }

createCommentaire(commentaire: Commentaire): Observable<any>{
  const formData = new FormData();
  formData.append('commentaire', JSON.stringify(commentaire));
  return this.http.post<any>(`${this.baseUrl}/createCommentaire`, formData);
}

updateCommentaire(commentaire: Commentaire, id : number): Observable<any> {
  const formData = new FormData();
  formData.append('commentaire', JSON.stringify(commentaire));
  return this.http.put<any>(`${this.baseUrl}/updateCommentaire/${id}`, formData);
}


deleteCommentaire(id: number): Observable<any> {
  return this.http.delete(`${this.baseUrl}/deleteCommentaire/${id}`);
}

// deleteAll(): Observable<any> {
//   return this.http.delete(this.baseUrl);
// }


}



