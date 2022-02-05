import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { ITask } from '../ITask';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private apiUrl = 'http://localhost:4000/tasksList';

  constructor(private http: HttpClient) {}

  getTasks(): Observable<ITask[]> {
    return this.http.get<ITask[]>(this.apiUrl);
  }

  deleteTask(_task: ITask): Observable<ITask> {
    const url = `${this.apiUrl}/${_task.id}`;
    return this.http.delete<ITask>(url);
  }

  updateTask(_task: ITask): Observable<ITask> {
    const url = `${this.apiUrl}/${_task.id}`;
    return this.http.put<ITask>(url, _task, httpOptions); // send updated data
  }

  addNewTask(newTask: ITask): Observable<ITask> {
    return this.http.post<ITask>(this.apiUrl, newTask, httpOptions);
  }
}
