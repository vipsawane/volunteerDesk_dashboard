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

getAllNotification(): Observable<Notification[]> {
  return this.http.get<Notification[]>(`${this.baseUrl}/getAllNotification`);
}

getNotificationById(id: any): Observable<Notification> {
  return this.http.get<Notification>(`${this.baseUrl}/${id}`);
}

findByContenuNotification(contenuNotification: any): Observable<Notification[]> {
  return this.http.get<Notification[]>(`${this.baseUrl}?contenuNotification=${contenuNotification}`);
}

createNotification(data: any): Observable<any> {
  return this.http.post(`${this.baseUrl}/createNotification`, data);
  
}


updateNotification(id: any, data: any): Observable<any> {
  return this.http.put(`${this.baseUrl}/updateNotification/${id}`, data);
}


deleteNotification(id: any): Observable<any> {
  return this.http.delete(`${this.baseUrl}/deleteNotification}/${id}`);
}

deleteAllNotification(): Observable<any> {
  return this.http.delete(`${this.baseUrl}/deleteAllNotification`);
}






}

