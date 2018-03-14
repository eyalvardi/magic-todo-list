import {Component, Input} from '@angular/core';
import {UsersProxyService} from "../users.proxy.service";
import {TaskModel} from "../todo-list.service";

@Component({
    selector: 'users',
    template: `
        <mat-list role="list">
            <h3 matSubheader><strong>Assign To: {{task?.assignTo}}</strong></h3>
            <mat-list-item role="listitem"
                           *ngFor="let user of users">
                <img matListAvatar
                     class="cursor-pointer"
                     (click)="assignTo(user)"
                     [src]="user.picture.thumbnail"/>
                <h3 matLine class="cursor-pointer" (click)="assignTo(user)">
                    {{user.name.first}} {{user.name.last}}
                </h3>
                <div matLine (click)="assignTo(user)">
                    <div class="text-wrap">
                        {{user.location.street}}, {{user.location.city}}, {{user.location.state}}
                    </div>
                </div>
            </mat-list-item>
        </mat-list>
    `})
export class UsersComponent {
    @Input() task: TaskModel;
    users: any[];

    constructor(public proxy: UsersProxyService) {
        this.load(3);
    }

    async load(num: number) {
        this.users = await this.proxy.load(num);
    }

    assignTo(user) {
        this.task.assignTo = user.name.first + ' ' + user.name.last;
        this.task.picUrl = user.picture.thumbnail;
    }
}
