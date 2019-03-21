import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Human } from '../models/human';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HumansService {

  constructor(private http: HttpClient) { }

  getHumans():Observable<Human[]>{
    return this.http.get<Human[]>("https://cromix-java.herokuapp.com/allUsers");
  }
}
