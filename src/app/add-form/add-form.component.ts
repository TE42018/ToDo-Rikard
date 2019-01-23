import { Component, OnInit } from '@angular/core';
import {Todo} from '../todo';

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.scss']
})
export class AddFormComponent implements OnInit {
  title='';
  description='';
  status =['Done', 'In-Progress','To do'];

  submitted = false;
  onKeyTitle(event: any) { // title
    this.title = event.target.value;
    
    console.log(this.title);
  }
  onKeyDesc(event: any) { // description
    this.title = event.target.value;
    
    console.log(this.title);
  }
  onKeyStatus(event: any) { // status
    this.status = event.target.value;
    
    console.log(this.title);
  }
  onSubmit() { this.submitted = true; }
  
  constructor() { }
  
  ngOnInit() {
  }

}
