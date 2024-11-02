import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { User } from '../../models/user';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUrl : string = environment.apiURL+"/user";
    constructor(private http: HttpClient) {}

    connexion(email: string, password: string): Observable<any> {
    const body = { email, password };
    console.log(`${this.baseUrl}/connexion`)
    // console.log(`${this.baseUrl}/connexion?email=${email}&password=${password}`)
      return this.http.get<any>(`${this.baseUrl}/connexion?email=${email}&password=${password}`);
    }
    

  getAllUser(): Observable<User[]> {
    return this.http.get<User[]>(`${this.baseUrl}/getAllUser`);
  }

  getUserById(id: any): Observable<User> {
    return this.http.get<User>(`${this.baseUrl}/${id}`);
  }

  // create(data: any): Observable<any> {
  //   return this.http.post(`${this.baseUrl}/createUser`, data);
    
  // }

  createUser(user: any, photoUser:File,photoCarteIdentite: File): Observable<any>{
    const formData = new FormData();
    formData.append('user', JSON.stringify(user));
    formData.append('imageFile1', photoUser);
    formData.append('imageFile', photoCarteIdentite);
    return this.http.post<any>(`${this.baseUrl}/createUser`, formData);
  }

  updateUser(user: User, image:File, id : number): Observable<any> {
    const formData = new FormData();
    formData.append('user', JSON.stringify(user));
    formData.append('photoUser', image);
    formData.append('photoCarteIdentite', image);
    return this.http.put<any>(`${this.baseUrl}/updateUser/${id}`, formData);
  }

  getCurrentUser(): Observable<User> {
    return this.http.get<User>(`${this.baseUrl}/currentUser`); // Endpoint pour obtenir l'utilisateur courant
  }


  deleteUser(id: any): Observable<any> {
    return this.http.delete(`${this.baseUrl}/delete/${id}`);

  }

  // deleteAll(): Observable<any> {
  //   return this.http.delete(this.baseUrl);
  // }

  getUserUserByNom(nom: any): Observable<User[]> {
    return this.http.get<User[]>(`${this.baseUrl}?nom=${nom}`);
  }

  getUserByPrenom(prenomUser: any): Observable<User[]> {
    return this.http.get<User[]>(`${this.baseUrl}?prenomUser=${prenomUser}`);
  }

  getUserByRole(role: any): Observable<User[]> {
    return this.http.get<User[]>(`${this.baseUrl}?role=${role}`);
  }
}
