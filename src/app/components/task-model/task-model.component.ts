import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { ITask } from '../../ITask';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task-model',
  templateUrl: './task-model.component.html',
  styleUrls: ['./task-model.component.css'],
})
export class TaskModelComponent implements OnInit {
  @Input() task!: ITask;
  deleteIcon = faTimes;
  @Output() onDeleteTask: EventEmitter<ITask> = new EventEmitter();
  @Output() toggleReminder: EventEmitter<ITask> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  onDelete(_task: ITask) {
    this.onDeleteTask.emit(_task);
  }

  onToggle(_task: ITask) {
    this.toggleReminder.emit(_task);
  }
}
