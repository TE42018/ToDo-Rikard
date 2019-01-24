import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Task} from '../models/models';
import { ListService } from '../services/list.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  @Output() select = new EventEmitter<Task>();

   list: Task[];

  constructor(listService: ListService) {
    this.list = [
      {title: 'Title 1', state: 'Todo', description: 'description 1'  },
      {title: 'Title 2', state: 'Done', description: 'description 2'},
      {title: 'Title 3', state: 'In Progress', description: 'description 3'},
      {title: 'Title 4', state: 'Todo', description: 'description 4'},
    ];

  }



  ngOnInit() {
  }

}
