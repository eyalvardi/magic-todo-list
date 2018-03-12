import {Component} from "@angular/core";
import {TodoListService} from "./todo-list.service";

@Component({
    selector: "todo-list",
    template: `
        <div>
            <div>
                <mat-form-field style="width: 400px">
                    <input
                            matInput
                            type="text"
                            placeholder="Task description"
                            #i>
                </mat-form-field>

                <button mat-raised-button color="primary" (click)="blService.addTask(i.value)">Add Task</button>
            </div>
            <br>
            <div>
                <table class="table table-striped table-condensed border table-hover table-sm">
                    <thead class="thead-dark">
                    <tr>
                        <td scope="col">#</td>
                        <td scope="col">Descriptions</td>
                        <td scope="col">Priority</td>
                        <td scope="col">Check</td>
                        <td scope="col" class="td-actions">Actions</td>
                    </tr>
                    </thead>
                    <tbody>
                    <tr *ngFor="let task of blService.tasks">
                        <td scope="row">{{task.id}}</td>
                        <td>{{task.desc}}</td>
                        <td>
                            <mat-select placeholder="Priority">
                                <mat-option [value]="1">1</mat-option>
                                <mat-option [value]="2">2</mat-option>
                                <mat-option [value]="3">3</mat-option>
                            </mat-select>
                        </td>
                        <td>
                            <mat-checkbox [(ngModel)]="task.isDone"></mat-checkbox>
                        </td>
                        <td>
                            <button mat-icon-button color="warn"
                                    (click)="blService.removeTask(task)">
                                <mat-icon>delete</mat-icon>
                            </button>
                        </td>
                        <!--<td><button (click)="blService.removeTask(task)">x</button></td>-->
                    </tr>
                    </tbody>
                </table>
            </div>
            <hr>
            <div>
                Total : {{blService.totalIsDone}} / {{blService.tasks.length}}
            </div>
        </div>
    `
})
export class TodoListComponent {
    constructor(public blService: TodoListService) {
    }
}