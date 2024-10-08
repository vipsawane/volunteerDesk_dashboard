import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { Notification } from '../../models/notification';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  baseUrl : any = environment.apiURL+"/notification";
  constructor(private http: HttpClient) {}

getAll(): Observable<Notification[]> {
  return this.http.get<Notification[]>(this.baseUrl);
}

get(id: any): Observable<Notification> {
  return this.http.get<Notification>(`${this.baseUrl}/${id}`);
}

findByContenuNotification(contenuNotification: any): Observable<Notification[]> {
  return this.http.get<Notification[]>(`${this.baseUrl}?contenuNotification=${contenuNotification}`);
}

create(data: any): Observable<any> {
  return this.http.post(this.baseUrl+"/addNotification", data);
  
}


update(id: any, data: any): Observable<any> {
  return this.http.put(`${this.baseUrl+'/update'}/${id}`, data);
}


delete(id: any): Observable<any> {
  return this.http.delete(`${this.baseUrl+'/delete'}/${id}`);
}

// deleteAll(): Observable<any> {
//   return this.http.delete(this.baseUrl+'');
// }






}

