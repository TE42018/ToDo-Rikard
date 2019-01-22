import { Component, OnInit } from '@angular/core';
import {Todo} from '../todo';

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.scss']
})
export class AddFormComponent implements OnInit {

  status =['Done', 'in-progress','To do'];

  submitted = false;
  
  onSubmit() { this.submitted = true; }

  constructor() { }
  
  ngOnInit() {
  }

}
