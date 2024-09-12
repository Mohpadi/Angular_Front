
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
// export class CarnetService {
//   private apiUrl = 'http://localhost:8000/api/contacts';

//   constructor(private http: HttpClient) { }

//   getCarnets(): Observable<any> {
//     return this.http.get<any>(this.apiUrl);
//   }

//   getCarnet(id: number): Observable<any> {
//     return this.http.get<any>(`${this.apiUrl}/${id}`);
//   }

//   addCarnet(carnet: any): Observable<any> {
//     return this.http.post<any>(this.apiUrl, carnet);
//   }
//   updateCarnet(id: number, carnet: Object): Observable<Object> {
//         return this.http.put(`${this.apiUrl}/${id}`, carnet);
//       }
//   deleteCarnet(id: number): Observable<any> {
//     return this.http.delete<any>(`${this.apiUrl}/${id}`);
//   }
// }

export class CarnetService {
  private baseUrl = 'http://localhost:8080/contacts';

  constructor(private http: HttpClient) { }

  getAllCarnets(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  getCarnetById(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createCarnet(carnet: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, carnet);
  }

  updateCarnet(id: number, carnet: Object): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, carnet);
  }

  deleteCarnet(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }
}
