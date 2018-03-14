import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from "@angular/forms"
// Angular Material
import {MatNativeDateModule} from "@angular/material";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatDividerModule} from '@angular/material/divider';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';

import {AppComponent} from './app.component';
import {TodoListComponent} from './todo-list/components/todo-list.component';
import {TodoTaskComponent} from './todo-list/components/todo-task.component';
import {TodoListService} from './todo-list/todo-list.service';
import { TodoListProgressComponent } from './todo-list/components/todo-list-progress.component';
import { TodoListDialogComponent } from './todo-list/components/todo-list-dialog.component';


@NgModule({
    declarations: [
        AppComponent,
        TodoListComponent,
        TodoTaskComponent,
        TodoListProgressComponent,
        TodoListDialogComponent

    ],
    entryComponents:[
        TodoListDialogComponent
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
        MatDatepickerModule,
        MatNativeDateModule,
        //MatMomentDateModule,
        MatButtonModule,
        MatCheckboxModule,
        MatIconModule,
        MatDialogModule

    ],
    providers: [
        TodoListService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
