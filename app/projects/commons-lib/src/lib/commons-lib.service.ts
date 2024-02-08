import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { User } from './models/user';

@Injectable({
  providedIn: 'root'
})
export class CommonsLibService {

  private readonly apiUrl: string = "api/users"

  constructor(private readonly http: HttpClient) { }

  upsert(user: User): Observable<User> {
    return this.http.post<User>(this.apiUrl, user);
  }

  find(idType: string, idNumber: string): Observable<User> {
    return this.http.get<User>(`${this.apiUrl}/${idType}/${idNumber}`)
  }

  findAllActives(): Observable<Array<User>> {
    return this.http.get<Array<User>>(`${this.apiUrl}/active`)
  }
}
