import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { User } from '../../models/user';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUrl : any = environment.apiURL+"user";
    constructor(private http: HttpClient) {}

  getAll(): Observable<User[]> {
    return this.http.get<User[]>(this.baseUrl);
  }

  get(id: any): Observable<User> {
    return this.http.get<User>(`${this.baseUrl}/${id}`);
  }

  create(data: any): Observable<any> {
    return this.http.post(this.baseUrl+"/addUser", data);
    
  }

  createUser(user: User, photoUser:File,photoCarteIdentite: File): Observable<any>{
    const formData = new FormData();
    formData.append('user', JSON.stringify(user));
    formData.append('photoUser', photoUser);
    formData.append('photoCarteIdentite', photoCarteIdentite);
    return this.http.post<any>(this.baseUrl +'/create', formData);
  }

  updateUser(user: User, image:File, id : number): Observable<any> {
    const formData = new FormData();
    formData.append('user', JSON.stringify(user));
    formData.append('photoUser', image);
    formData.append('photoCarteIdentite', image);
    return this.http.put<any>(this.baseUrl +'/update/' + id, formData);
  }


  delete(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl+'/delete'}/${id}`);
  }

  // deleteAll(): Observable<any> {
  //   return this.http.delete(this.baseUrl);
  // }

  findByNom(nom: any): Observable<User[]> {
    return this.http.get<User[]>(`${this.baseUrl}?nom=${nom}`);
  }

  findByPrenom(prenomUser: any): Observable<User[]> {
    return this.http.get<User[]>(`${this.baseUrl}?prenomUser=${prenomUser}`);
  }

  findByRole(role: any): Observable<User[]> {
    return this.http.get<User[]>(`${this.baseUrl}?role=${role}`);
  }
}
