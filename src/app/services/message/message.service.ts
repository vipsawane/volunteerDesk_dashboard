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

getAllMessage(): Observable<Message[]> {
  return this.http.get<Message[]>(`${this.baseUrl}/getAllMessage`);
}

getMessageById(id: any): Observable<Message> {
  return this.http.get<Message>(`${this.baseUrl}/getAllMessageById/${id}`);
}

// create(data: any): Observable<any> {
//   return this.http.post(this.baseUrl+"/addMessage", data);
  
// }

createMessage(message: Message, imageMessage:File): Observable<any>{
  const formData = new FormData();
  formData.append('message', JSON.stringify(message));
  formData.append('imageMessage', imageMessage);
  return this.http.post<any>(`${this.baseUrl}/createMessage}`, formData);
}

updateMessage(message: Message, imageMessage:File, id : any): Observable<any> {
  const formData = new FormData();
  formData.append('message', JSON.stringify(message));
  formData.append('imageMessage', imageMessage);
  return this.http.put<any>(`${this.baseUrl}/updateMessage/${id}`, formData);
}


deleteMessage(id: any): Observable<any> {
  return this.http.delete(`${this.baseUrl}/deleteMessage/${id}`);
}

deleteAllMessage(): Observable<any> {
  return this.http.delete(`${this.baseUrl}/deleteAllMessage`);
}

findByContenuMessage(contenuMessage: any): Observable<Message[]> {
  return this.http.get<Message[]>(`${this.baseUrl}?contenuMessage=${contenuMessage}`);
}

}
