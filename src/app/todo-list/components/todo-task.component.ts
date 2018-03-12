import { Component, Input } from "@angular/core";
import { TodoListService } from "../todo-list.service";


@Component({
    selector: "todo-task",
    template: `
        <tr>
            <td>{{task.id}}</td>
            <td>{{task.desc}}</td>
            <td>
                <mat-form-field>
                    <mat-select placeholder="Priority">
                        <mat-option [value]="1">1</mat-option>
                        <mat-option [value]="2">2</mat-option>
                        <mat-option [value]="3">3</mat-option>
                    </mat-select>
                </mat-form-field>
            </td>
            <td><input type="checkbox" [(ngModel)]="task.isDone"></td>
            <td><button (click)="blService.removeTask(task)">x</button></td>
        </tr>
    `
})
export class TodoTaskComponent{
    @Input('source') task;

    constructor(public blService:TodoListService){}
}