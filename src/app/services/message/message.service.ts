import { Injectable } from '@angular/core';
import { Message } from '../../models/message';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from '../../../environments/environment.development';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class MessageService {

  baseUrl : any = environment.apiURL+"/message";
  constructor(private http: HttpClient) {}

getAll(): Observable<Message[]> {
  return this.http.get<Message[]>(this.baseUrl);
}

get(id: any): Observable<Message> {
  return this.http.get<Message>(`${this.baseUrl}/${id}`);
}

create(data: any): Observable<any> {
  return this.http.post(this.baseUrl+"/addMessage", data);
  
}

createMessage(message: Message, imageMessage:File): Observable<any>{
  const formData = new FormData();
  formData.append('message', JSON.stringify(message));
  formData.append('imageMessage', imageMessage);
  return this.http.post<any>(this.baseUrl +'/create', formData);
}

updateRessource(message: Message, imageMessage:File, id : any): Observable<any> {
  const formData = new FormData();
  formData.append('message', JSON.stringify(message));
  formData.append('imageMessage', imageMessage);
  return this.http.put<any>(this.baseUrl +'/update/' + id, formData);
}


delete(id: any): Observable<any> {
  return this.http.delete(`${this.baseUrl+'/delete'}/${id}`);
}

// deleteAll(): Observable<any> {
//   return this.http.delete(this.baseUrl);
// }

findByContenuMessage(contenuMessage: any): Observable<Message[]> {
  return this.http.get<Message[]>(`${this.baseUrl}?contenuMessage=${contenuMessage}`);
}

}
