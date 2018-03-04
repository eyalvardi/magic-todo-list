import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms"

import { AppComponent } from './app.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoTaskComponent } from './todo-list/todo-task.component';
import { TodoListService } from './todo-list/todo-list.service';


@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    TodoTaskComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    TodoListService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
