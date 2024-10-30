// src/app/features/auth/services/auth.service.ts

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserCreateDto } from '../features/auth/models/create-req';
import { TaskDto } from '../features/task/models/TaskDto';
import { environment } from 'src/environments/environment';



@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = environment.apiUrl; 

  constructor(private http: HttpClient) {}

  createUser(userData: UserCreateDto): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}${environment.userPath}/`, userData);
  }

  getTasks(id): Observable<TaskDto[]> {
    return this.http.get<TaskDto[]>(`${this.apiUrl}${environment.userPath}/task/${id}`);
  }
}
