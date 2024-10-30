import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { ListTaskComponent } from './components/list-task/list-task.component';
import { TaskRoutingModule } from './task-routing';

import { MatTableModule } from '@angular/material/table';

import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CreateTaskComponent } from './components/create-task/create-task.component';
import { FormsModule } from '@angular/forms';
import { UpdateTaskComponent } from './components/update-task/update-task.component';



@NgModule({
  declarations: [
    ListTaskComponent,
    CreateTaskComponent,
    UpdateTaskComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatTableModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    TaskRoutingModule
  ],
  providers: [DatePipe],
})
export class TaskModule { }
