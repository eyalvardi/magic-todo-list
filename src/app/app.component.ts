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
                    <todo-list-progress class="d-flex justify-content-end"></todo-list-progress>
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
