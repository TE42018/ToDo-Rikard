import { Injectable } from '@angular/core';
import { Task } from '../models/models';

@Injectable({
  providedIn: 'root'
})

export class ListService {
  private task: Task[];
  constructor() {

    this.task = [

    ]

  }
  addTask(task: Task) {
    task.title = '';
    task.description = '';
    task.state = 'Todo';
  }
  getTask() {
    return this.task;
  }

}
