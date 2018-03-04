import { Component } from "@angular/core";
import { TodoListService } from "./todo-list.service";

@Component({
    selector: "todo-list",
    template: `
        <div>
            <div>
                <input type="text" #i>
                <button (click)="blService.addTask(i.value)">Add Task</button>
            </div>
            <hr>
            <div>
                <todo-task
                    *ngFor="let task of blService.tasks"
                    [source]="task"
                ></todo-task>
            </div>
            <hr>
            <div>
                Total : {{blService.totalIsDone}} / {{blService.tasks.length}}
            </div>
        </div>
    `})
export class TodoListComponent{
    constructor(public blService:TodoListService){}
}