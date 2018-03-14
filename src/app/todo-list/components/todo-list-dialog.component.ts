import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";
import {TaskModel} from "../todo-list.service";

@Component({
    selector: 'app-todo-list-dialog',
    template: `
        <mat-toolbar color="primary">
                <span mat-dialog-title>Task Id: {{task.id}}</span>
        </mat-toolbar>
        
        <mat-dialog-content>
            <form class="example-form">
                
                <table class="table table-sm">                    
                    <tr>
                        <td width="70%">
                            <mat-form-field class="example-full-width">
                                <input matInput
                                       name="desc"
                                       [(ngModel)]="task.desc"
                                       placeholder="Description">
                            </mat-form-field> 
                        </td>
                        <td width="30%">
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
                    </tr>
                    <tr>                        
                        <td>
                            <mat-checkbox
                                    name="isDone"
                                    [(ngModel)]="task.isDone">
                                Is Done
                            </mat-checkbox>                            
                        </td>
                        <td>
                            <mat-select
                                    name="priority"
                                    [(ngModel)]="task.priority"
                                    (change)="setPriority($event)"
                                    placeholder="Priority">
                                <mat-option [value]="1">1</mat-option>
                                <mat-option [value]="2">2</mat-option>
                                <mat-option [value]="3">3</mat-option>
                            </mat-select>
                        </td>
                    </tr>
                </table>
            </form>
            <users [task]="task"></users>
        </mat-dialog-content>
        <mat-dialog-actions>
            <button mat-raised-button mat-dialog-close color="primary">Cancel</button>
            <button mat-raised-button [mat-dialog-close]="task" color="primary">Save</button>
        </mat-dialog-actions>
    `,
    styles: []
})
export class TodoListDialogComponent {

    task: TaskModel = {} as TaskModel;


    constructor(
        public dialogRef: MatDialogRef<TodoListDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any) {

        Object.assign(this.task, data.task);
    }

    onNoClick(): void {
        this.dialogRef.close();
    }

    setPriority(matSelect) {
        this.task.priority = matSelect.value;
    }

}
