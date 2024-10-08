import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { StatutMessage } from '../../models/statutMessage';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StatutMessageService {

  baseUrl : any = environment.apiURL+"/statutMessage";
  constructor(private http: HttpClient) {}

getAll(): Observable<StatutMessage[]> {
  return this.http.get<StatutMessage[]>(this.baseUrl);
}

get(id: any): Observable<StatutMessage> {
  return this.http.get<StatutMessage>(`${this.baseUrl}/${id}`);
}

create(data: any): Observable<any> {
  return this.http.post(this.baseUrl+"/addStatutMessage", data);
  
}

createUSer(statutMessage: StatutMessage): Observable<any>{
  const formData = new FormData();
  formData.append('statutMessage', JSON.stringify(statutMessage));
  return this.http.post<any>(this.baseUrl +'/create', formData);
}

updateUser(statutMessage: StatutMessage, id : number): Observable<any> {
  const formData = new FormData();
  formData.append('statutMessage', JSON.stringify(statutMessage));
  return this.http.put<any>(this.baseUrl +'/update/' + id, formData);
}


delete(id: number): Observable<any> {
  return this.http.delete(`${this.baseUrl+'/delete'}/${id}`);
}

// deleteAll(): Observable<any> {
//   return this.http.delete(this.baseUrl);
// }

findByLibelleStatutMessage(libelleStatutMessage: any): Observable<StatutMessage[]> {
  return this.http.get<StatutMessage[]>(`${this.baseUrl}?libelleStatutMessage=${libelleStatutMessage}`);
}


}


