import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from "@angular/forms"
// Angular Material
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatDividerModule} from '@angular/material/divider';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatIconModule} from '@angular/material/icon';

import {AppComponent} from './app.component';
import {TodoListComponent} from './todo-list/todo-list.component';
import {TodoTaskComponent} from './todo-list/todo-task.component';
import {TodoListService} from './todo-list/todo-list.service';


@NgModule({
    declarations: [
        AppComponent,
        TodoListComponent,
        TodoTaskComponent

    ],
    imports: [

        BrowserModule,
        FormsModule,
        // Angular Material
        BrowserAnimationsModule,
        MatToolbarModule,
        MatDividerModule,
        MatInputModule,
        MatSelectModule,
        MatButtonModule,
        MatCheckboxModule,
        MatIconModule

    ],
    providers: [
        TodoListService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
