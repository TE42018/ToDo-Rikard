import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { AddFormComponent } from './add-form/add-form.component';
import { Todo } from './Todo';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    AddFormComponent,
    FormsModule
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Todo
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
