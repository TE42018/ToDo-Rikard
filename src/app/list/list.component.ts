import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Task} from '../models/models';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  @Output() select = new EventEmitter<Task>();

  list: Task[];

  constructor() {
    this.list = [
      {title: 'Title 1', state: 'To Do', description: 'description 1', urgent: true },
      {title: 'Title 2', state: 'Done', description: 'description 2', urgent: true },
      {title: 'Title 3', state: 'In Progress', description: 'description 3', urgent: false },
      {title: 'Title 4', state: 'To Do', description: 'description 4', urgent: true },
    ];

  }



  ngOnInit() {
  }

}
