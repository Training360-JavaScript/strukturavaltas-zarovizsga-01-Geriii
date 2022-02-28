import { environment } from './../../environments/environment';
import { Car } from 'src/app/model/car';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  entityName: string = 'cars';

  constructor(
    private http: HttpClient,
  ) { }

  getAll(): Observable<Car[]> {
    return this.http.get<Car[]>(`${environment.apiUrl}${this.entityName}`);
  }

  get(id: number): Observable<Car> {
    return this.http.get<Car>(`${environment.apiUrl}${this.entityName}/${id}`);
  }

  update(car: Car): Observable<Car> {
    return this.http.patch<Car>(
      `${environment.apiUrl}${this.entityName}/${car.id}`,
      car
    );
  }
}
