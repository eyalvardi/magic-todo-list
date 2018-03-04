import { Component, Input } from "@angular/core";
import { TodoListService } from "./todo-list.service";


@Component({
    selector: "todo-task",
    template: `
        <div>
            <input type="checkbox" [(ngModel)]="task.isDone">
            <span>{{task.desc}}</span>
            <button (click)="blService.removeTask(task)">x</button>
        </div>
    `
})
export class TodoTaskComponent{
    @Input('source') task;

    constructor(public blService:TodoListService){}
}