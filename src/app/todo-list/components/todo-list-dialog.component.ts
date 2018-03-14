import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";
import {TaskModel} from "../todo-list.service";

@Component({
    selector: 'app-todo-list-dialog',
    template: `
        <h2 mat-dialog-title>Edit Task Id: {{task.id}}</h2>
        <mat-dialog-content>
            <form class="example-form">
                <table class="table">
                    <tbody>
                    <tr>
                        <td>
                            <mat-checkbox 
                                    name="isDone"
                                    [(ngModel)]="task.isDone">
                                Is Daone
                            </mat-checkbox>
                        </td>
                        <td>
                            <mat-form-field class="example-full-width">
                                <input matInput
                                       name="desc"
                                       [(ngModel)]="task.desc"
                                       placeholder="Description">
                            </mat-form-field>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <mat-form-field>
                                <input #date
                                       matInput
                                       [matDatepicker]="picker"
                                       name="date"
                                       [(ngModel)]="task.endDate"
                                       placeholder="Choose a date">
                                <mat-datepicker-toggle matSuffix [for]="picker"></mat-datepicker-toggle>
                                <mat-datepicker #picker></mat-datepicker>
                            </mat-form-field>
                        </td>
                        <td>
                            <mat-select
                                    name="priority"
                                    [(ngModel)]="task.priority"
                                    placeholder="Priority">
                                <mat-option [value]="1">1</mat-option>
                                <mat-option [value]="2">2</mat-option>
                                <mat-option [value]="3">3</mat-option>
                            </mat-select>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </form>
        </mat-dialog-content>
        <mat-dialog-actions>
            <button mat-button mat-dialog-close>Cancel</button>
            <!-- The mat-dialog-close directive optionally accepts a value as a result for the dialog. -->
            <button mat-button [mat-dialog-close]="task">Save</button>
        </mat-dialog-actions>
    `,
    styles: []
})
export class TodoListDialogComponent {

    task:TaskModel = {} as TaskModel;



    constructor(
        public dialogRef: MatDialogRef<TodoListDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any) {

        Object.assign(this.task,data.task);    }

    onNoClick(): void {
        this.dialogRef.close();
    }

}
