import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StateTask } from '../models/StateTask';
import { environment } from 'src/environments/environment';
import { TaskDto } from '../models/TaskDto';

@Injectable({
  providedIn: 'root'
})
export class StateService {
  private apiUrl = environment.apiUrl; ;

  constructor(private http: HttpClient) {}

  getStates(): Observable<StateTask[]> {
    return this.http.get<StateTask[]>(this.apiUrl);
  }
}
