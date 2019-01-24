import { Component, OnInit } from '@angular/core';
import { Task } from '../models/models';
import { ListService } from '../services/list.service';


@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.scss']
})
export class AddFormComponent implements OnInit {

  task: Task;
  status: string[] = ['Todo', 'In Progress', 'Done']

  constructor(private listService: ListService) {
    this.task = { title: 'Title', description: 'Description', state: 'Todo' };
  }
  onSubmit(event: any) {

    this.task.title = event.target.value;
    this.task.description = event.target.value;
    this.task.state = event.target.value;


  }

  // onKeyTitle(event: any) { // title

  //   this.task.title = event.target.value;

  // }
  // onKeyDesc(event: any) { // description
  //   this.task.description = event.target.value;
  // }
  // onKeyStatus(event: any) { // status
  //   this.task.state = event.target.value;
  // }

  onSelectState(state: 'Todo' | 'In Progress' | 'Done') {
    this.task.state = state;
  }

  ngOnInit() {
  }

}
