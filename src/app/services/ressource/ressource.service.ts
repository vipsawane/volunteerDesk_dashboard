import { Injectable } from '@angular/core';
import { Ressource } from '../../models/ressource';
import { Observable, catchError } from 'rxjs';
import { environment } from '../../../environments/environment.development';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class RessourceService {

  baseUrl : any = environment.apiURL+"/ressource";
    constructor(private http: HttpClient) {}

    getAllRessource(): Observable<Ressource[]> {
    return this.http.get<Ressource[]>(`${this.baseUrl}/getAllRessource`);
  }

  getRessourceById(id: any): Observable<Ressource> {
    return this.http.get<Ressource>(`${this.baseUrl}/getAllRessourceById/${id}`);
  }

  getRessourceByUser(userId: number): Observable<Ressource[]> {
    return this.http.get<Ressource[]>(`${this.baseUrl}/user/${userId}`);
  }

  // create(data: any): Observable<any> {
  //   return this.http.post(this.baseUrl+"/addRessource", data);
    
  // }

  createRessource(ressource: Ressource): Observable<any>{
    return this.http.post<any>(`${this.baseUrl}/createRessource`, ressource);
  }

  // Mettre à jour une ressource existante
  updateRessource(ressource: Ressource, idRessource: number): Observable<Ressource> {
    return this.http.put<Ressource>(`${this.baseUrl}/updateRessource/${idRessource}`, ressource);
  }

  // Supprimer une ressource
  deleteRessource(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/deleteRessource/${id}`).pipe(
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

  // deleteAll(): Observable<any> {
  //   return this.http.delete(this.baseUrl);
  // }

  findByLibelleRessource(libelleRessource: any): Observable<Ressource[]> {
    return this.http.get<Ressource[]>(`${this.baseUrl}?libelleRessource=${libelleRessource}`);
  }

}

