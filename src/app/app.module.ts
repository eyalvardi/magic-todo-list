import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from "@angular/forms"

import {AppComponent} from './app.component';
import {TodoListComponent} from './todo-list/components/todo-list.component';
import {TodoTaskComponent} from './todo-list/components/todo-task.component';
import {TodoListService} from './todo-list/todo-list.service';
import { TodoListProgressComponent } from './todo-list/components/todo-list-progress.component';
import { TodoListDialogComponent } from './todo-list/components/todo-list-dialog.component';
import { UsersComponent } from './todo-list/components/users.component';
import {UsersProxyService} from "./todo-list/users.proxy.service";
import {HttpClientModule} from "@angular/common/http";
import {materialModules} from "./my-material.module";


@NgModule({
    declarations: [
        AppComponent,
        TodoListComponent,
        TodoTaskComponent,
        TodoListProgressComponent,
        TodoListDialogComponent,
        UsersComponent

    ],
    entryComponents:[
        TodoListDialogComponent
    ],
    imports: [

        BrowserModule,
        FormsModule,
        HttpClientModule,

        ...materialModules
        //MyMaterialModule

    ],
    providers: [
        TodoListService,
        UsersProxyService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
