// src/app/features/auth/services/auth.service.ts

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserCreateDto } from '../models/create-req';
import { UserLoginDto } from '../models/auth-req.model';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = environment.apiUrl; 
  private loggedIn = false

  constructor(private http: HttpClient) {}

  login(userData: UserLoginDto): Observable<string> {
    this.loggedIn=true
    return this.http.post<string>(`${this.apiUrl}${environment.authPath}/login`, userData);
  }
  isAuthenticated(): boolean {
    return this.loggedIn;
  }
}
