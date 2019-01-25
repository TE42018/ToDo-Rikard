import { Component, OnInit } from '@angular/core';
import { Task } from '../models/models';
import { ListService } from '../services/list.service';


@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.scss']
})
export class AddFormComponent implements OnInit {
  back: boolean;
  task: Task;
  status: string[] = ['Todo', 'In Progress', 'Done'];

  constructor(private listService: ListService) {
    this.task = { title: 'Title', description: 'Description', state: 'Todo' };
  }
  onBack() {
    this.back = true;
  }
  onSubmit(event: any) {

    // this.task.title = event.target.value;
    // this.task.description = event.target.value;
    // this.task.state = event.target.value;

    this.listService.addTask({ title: this.task.title, description: this.task.description, state: this.task.state });
    console.log(this.task.title);
    console.log(this.task.description);
    console.log(this.task.state);
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
