import { Component, OnInit } from '@angular/core';

import { ITask } from '../../ITask';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
export class TasksComponent implements OnInit {
  tasks: ITask[] = []; // state

  constructor(private taskService: TaskService) {}

  // same as useEffect
  ngOnInit(): void {
    this.taskService.getTasks().subscribe((_tasks) => {
      this.tasks = _tasks;
    });
  }

  onDeleteTask(_task: ITask) {
    this.taskService.deleteTask(_task).subscribe(() => {
      this.tasks = this.tasks.filter((t) => t.id !== _task.id);
    });
  }

  toggleReminder(_task: ITask) {
    _task.reminder = !_task.reminder;
    this.taskService.updateTask(_task).subscribe();
  }

  addTask(_task: ITask) {
    this.taskService
      .addNewTask(_task)
      .subscribe((task) => this.tasks.push(task));
  }
}
