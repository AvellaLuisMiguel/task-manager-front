// src/app/services/task.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TaskCreate } from '../models/Task';
import { environment } from 'src/environments/environment';
import { TaskDto } from '../models/TaskDto';


@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl = environment.apiUrl; ; 

  constructor(private http: HttpClient) {}

  createTask(idUser: number, taskDto: TaskCreate): Observable<TaskCreate> {
    return this.http.post<TaskCreate>(`${this.apiUrl}${environment.taskPath}/${idUser}`, taskDto);
  }

  deleteTask(taskId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}${environment.taskPath}/${taskId}`);
  }

  updateTask(taskId: number, taskDto: TaskCreate): Observable<TaskCreate> {
    return this.http.put<TaskCreate>(`${this.apiUrl}${environment.taskPath}/${taskId}`, taskDto);
  }

  getTaskById(taskId: number): Observable<TaskDto> {
    return this.http.get<TaskDto>(`${this.apiUrl}${environment.taskPath}/${taskId}`);
  }
}
