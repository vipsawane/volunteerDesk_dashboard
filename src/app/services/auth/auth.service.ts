import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment.development';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly baseUrl: string = environment.apiURL+"/auth";
  
  constructor(private http: HttpClient) {}

  connexion(email: string, password: string): Observable<any> {
    const body = { email, password };
    return this.http.post<any>(`${this.baseUrl}/connexion`,body, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }).pipe(
      catchError(error => {
        console.error('Erreur de connexion:', error);
        return throwError(() => new Error('Erreur de connexion, veuillez réessayer.'));
      })
    );
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
