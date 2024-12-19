import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root' // This ensures the service is available application-wide
})
export class BackendService {
  private baseUrl = 'http://localhost:8888';

  constructor(private http: HttpClient) {}

  getClients(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/clients`);
  }

  getVoitures(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/voitures`);
  }

  addVoiture(voiture: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/voitures/${voiture.id_client}`, voiture);
  }

   // Fetch a specific voiture by ID
  getVoitureById(voitureId: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/voitures/${voitureId}`);
  }

  // Fetch voitures associated with a specific client
  getVoituresByClient(clientId: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/voitures/client/${clientId}`);
  }

  updateVoiture(id: number, voiture: any): Observable<any> {
    return this.http.put<any>(`${this.baseUrl}/voitures/${id}`, voiture);
  }

 deleteVoiture(id: number): Observable<any> {
  return this.http.delete<any>(`${this.baseUrl}/voitures/${id}`);
}

}
