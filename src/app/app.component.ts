import {Component} from '@angular/core';
import {TodoListService} from "./todo-list/todo-list.service";

@Component({
    selector: 'app-root',
    template: `
        <div>
            <mat-toolbar color="primary">
                Todo List Demo

                <!-- This fills the remaining space of the current row -->
                <span class="example-fill-remaining-space"></span>

                <div class="d-inline-block progress-cointainer">
                    <div class="d-flex justify-content-end">
                        Status: &nbsp;
                        <div class="d-inline-block progress ">
                            <div class="bg-info border" [ngStyle]="{ width: blService.donePercentage * 100 + '%' }">
                                &nbsp;
                            </div>
                        </div>
                        <div class="d-inline-block" style="padding: 0px 3px">
                            {{ blService.donePercentage | percent}}
                        </div>
                    </div>
                </div>
            </mat-toolbar>

            <div class="container">
                <br>
                <todo-list></todo-list>
            </div>
        </div>
    `
})
export class AppComponent {
    constructor(public blService: TodoListService) {
    }
}
