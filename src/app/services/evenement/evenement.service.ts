import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { Observable, catchError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Evenement } from '../../models/evenement';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EvenementService {

  baseUrl: string = environment.apiURL + "/evenement";

  constructor(private http: HttpClient) {}

  // Récupérer tous les événements
  getAllEvenement(): Observable<Evenement[]> {
    return this.http.get<Evenement[]>(`${this.baseUrl}/getAllEvenement`).pipe(
      catchError(this.handleError)
    );
  }

  // Méthode pour récupérer les événements d'un utilisateur spécifique
  getEvenementByUser(userId: number): Observable<Evenement[]> {
    return this.http.get<Evenement[]>(`${this.baseUrl}/user/${userId}`);
  }

 
  createEvenement(evenement : Evenement): Observable<any> {
    return  this.http.post<any>(`${this.baseUrl}/createEvenement`, evenement); 
  }
  // Créer un événement
  // createEvenement(evenement: Evenement): Observable<Evenement> {
  //   return this.http.post<Evenement>(`${this.baseUrl}/createEvenement`, evenement).pipe(
  //     catchError(this.handleError)
  //   );
  // }

  // Mettre à jour un événement
  updateEvenement(evenement: Evenement, idEvenement: number): Observable<Evenement> {
    return this.http.put<Evenement>(`${this.baseUrl}/update/${idEvenement}`, evenement);
    
  }

  // Récupérer un événement par ID
  getEvenementById(idEvenement: number): Observable<Evenement> {
    return this.http.get<Evenement>(`${this.baseUrl}/getAllEvenementById/${idEvenement}`).pipe(
      catchError(this.handleError)
    );
  }

  getEvenementByType(idEvenement: number): Observable<Evenement> {
    return this.http.get<Evenement>(`${this.baseUrl}/getAllEvenementById/${idEvenement}`).pipe(
      catchError(this.handleError)
    );
  }

  // Supprimer un événement par ID
  deleteEvenement(idEvenement: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/deleteEvenement/${idEvenement}`).pipe(
      catchError(this.handleError)
    );
  }

  // Gestion des erreurs
  private handleError(error: HttpErrorResponse) {
    let errorMessage = 'Une erreur est survenue';
    if (error.error instanceof ErrorEvent) {
      // Erreur côté client
      errorMessage = `Erreur front: ${error.error.message}`;
    } else {
      // Erreur côté serveur
      errorMessage = `Erreur serveur ${error.status}: ${error.message}`;
    }
    return throwError(() => new Error(errorMessage));
  }
}
