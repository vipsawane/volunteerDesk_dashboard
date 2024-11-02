import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { Role } from '../../models/role';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  baseUrl : any = environment.apiURL+"/role";
  constructor(private http: HttpClient) {}

getAllRole(): Observable<Role[]> {
  return this.http.get<Role[]>(`${this.baseUrl}/getAllRole`);
}

getRoleById(id: any): Observable<Role> {
  return this.http.get<Role>(`${this.baseUrl}/getAllRoleById/${id}`);
}

// create(data: any): Observable<any> {
//   return this.http.post(this.baseUrl+"/addRole", data);
  
// }

createRole(role: Role): Observable<any>{
  const formData = new FormData();
  formData.append('role', JSON.stringify(role));
  return this.http.post<any>(`${this.baseUrl}/createRole`, formData);
}

updateRole(role: Role, id : number): Observable<any> {
  const formData = new FormData();
  formData.append('role', JSON.stringify(role));
  return this.http.put<any>(`${this.baseUrl}/updateRole/${id}`, formData);
}


deleteRole(id: number): Observable<any> {
  return this.http.delete(`${this.baseUrl}/deleteRole/${id}`);
}

// deleteAll(): Observable<any> {
//   return this.http.delete(this.baseUrl);
// }

findByLibelleRole(libelleRole: any): Observable<Role[]> {
  return this.http.get<Role[]>(`${this.baseUrl}?libelleRole=${libelleRole}`);
}


}


