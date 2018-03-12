import {Component} from '@angular/core';
import {TodoListService} from "../todo-list.service";

@Component({
    selector: 'todo-list-progress',
    template: `
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

    `,
    styles: []
})
export class TodoListProgressComponent {

    constructor(public blService:TodoListService) {
    }

}
