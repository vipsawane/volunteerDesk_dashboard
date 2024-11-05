import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment.development';
import { catchError, Observable, throwError } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../../models/user';



@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly baseUrl: string = environment.apiURL+"/auth";
  
  constructor(private http: HttpClient) { }

  authenticate(email: string, password: string): Observable<User | null> {
    const headers = new HttpHeaders({
      Authorization: 'Basic ' + btoa(email + ':' + password)
    }); 

    return this.http.get<User[]>(`${this.baseUrl}/get`, { headers }).pipe(
      map(users => {
        console.log('Réponse API:', users);  
        const user = users.find(user => user.email === email) || null;
        if (user) {
          this.storeUser(user);
          console.log('authentification', user.nomUser);
        }
        return user;
      })
    );
  }
  getAuthToken(): string | null {
    const authToken = localStorage.getItem('authToken');
    return authToken ? authToken : null;
  }

  storeUser(user: User): void {
    localStorage.setItem('InfoUser', JSON.stringify(user));
    console.log('Utilisateur stocké:', user);  // Affiche l'utilisateur stocké
  }

  getUser(): User | null {
    const userJson = localStorage.getItem('InfoUser');
    console.log('Utilisateur récupéré du localStorage:', userJson);  // Affiche les données récupérées
    return userJson ? JSON.parse(userJson) : null;
  }

    // Méthode pour mettre à jour l'utilisateur dans localStorage
    updateStoredUser(updatedUser: User): void {
      this.storeUser(updatedUser);
      console.log('Utilisateur mis à jour dans localStorage:', updatedUser);
    }

  clearUser(): void {
    localStorage.removeItem('InfoUser');
  }

}


  // connexion(email: string, password: string): Observable<User | Organisation> {
  //   const body = { email, password };

  //   return this.http.post<User | Organisation>(`${this.baseUrl}/connexion`, body, {
  //     headers: new HttpHeaders({
  //       'Content-Type': 'application/json'
  //     })
  //   }).pipe(
  //     catchError(error => {
  //       console.error('Login failed:', error);
  //       return throwError(() => new Error('Erreur de connexion, veuillez réessayer.'));
  //     })
  //   );
  // }
// }
