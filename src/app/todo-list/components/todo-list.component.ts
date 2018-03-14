import {Component} from "@angular/core";
import {TaskModel, TodoListService} from "../todo-list.service";
import {DialogPosition, MatDialog} from "@angular/material";
import {TodoListDialogComponent} from "./todo-list-dialog.component";

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

                <mat-form-field>
                    <input #date
                            matInput                           
                           [matDatepicker]="picker"
                           placeholder="Choose a date">
                    <mat-datepicker-toggle matSuffix [for]="picker">                        
                    </mat-datepicker-toggle>
                    <mat-datepicker #picker></mat-datepicker>
                </mat-form-field>
                
                <button mat-raised-button color="primary" 
                        (click)="blService.addTask(i.value,date.value)">Add Task</button>
            </div>
            <br>
            <div>
                <table class="table table-striped table-condensed border table-hover table-sm">
                    <thead class="table-thead">
                        <tr>
                        <td scope="col">#</td>
                        <td scope="col" style="width: 40%">Descriptions</td>
                        <td scope="col">Assign</td>
                        <td scope="col">End D.</td>
                        <td scope="col">Priority</td>
                        <td scope="col">Check</td>
                        <td scope="col" class="td-actions">Actions</td>
                    </tr>
                    </thead>
                    <tbody>
                    <tr     [class.end-date]="task.isPassedDate"
                            *ngFor="let task of blService.tasks">
                        <td scope="row">{{task.id}}</td>
                        <td>{{task.desc}}</td>
                        <td>
                            <img class="img-thumbnail face" [src]="task.picUrl"/>
                            {{task.assignTo}}
                        </td>
                        <td>{{task.endDate | date}}</td>
                        <td>
                            <mat-select
                                    name="priority"
                                    [(ngModel)]="task.priority"
                                    (change)="setPriority(task, $event)"
                                    placeholder="Priority">
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
                            <button mat-icon-button color="info"
                                    (click)="openDialog(task)">
                                <mat-icon>edit</mat-icon>
                            </button>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
            <hr>
            <div>
                <strong> Total : {{blService.totalIsDone}} / {{blService.tasks.length}}</strong>
            </div>
        </div>
    `
})
export class TodoListComponent {
    constructor(
        private dialog : MatDialog,
        public blService: TodoListService) {
    }

    openDialog(task:TaskModel): void {
        let dialogRef = this.dialog.open(TodoListDialogComponent, {
            height: '500px',
            width : '700px',
            //position: DialogPosition.left,
            data: { task: task }
        });

        dialogRef.afterClosed().subscribe(result => {
            //this.animal = result;
            Object.assign(task,result);
        });
    }

    setPriority(task, matSelect){
        task.priority = matSelect.value;
    }
}