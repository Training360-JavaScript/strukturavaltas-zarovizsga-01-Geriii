import { environment } from './../../environments/environment';
import { Construction } from 'src/app/model/construction';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConstructionService {

  entityName: string = 'constructions';

  constructor(
    private http: HttpClient,
  ) { }

  getAll(): Observable<Construction[]> {
    return this.http.get<Construction[]>(`${environment.apiUrl}${this.entityName}`);
  }

  get(id: number): Observable<Construction> {
    return this.http.get<Construction>(`${environment.apiUrl}${this.entityName}/${id}`);
  }
  create(item: Construction){
    return this.http.post<Construction>(`${environment.apiUrl}${this.entityName}`, item);
  }

  update(construction: Construction): Observable<Construction> {
    return this.http.patch<Construction>(
      `${environment.apiUrl}${this.entityName}/${construction.id}`,
      construction
    );
  }
  delete(id: number): Observable<Construction>{
    return this.http.delete<Construction>(`${environment.apiUrl}${this.entityName}/${id}`);
  }

}
