import { environment } from './../../environments/environment';
import { Drug } from 'src/app/model/drug';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DrugService {
  entityName: string = 'drugs';

  constructor(
    private http: HttpClient,
  ) { }

  getAll(): Observable<Drug[]> {
    return this.http.get<Drug[]>(`${environment.apiUrl}${this.entityName}`);
  }

}
