import { Component, OnInit } from '@angular/core';
import { TaskDto } from '../../models/TaskDto';
import { ActivatedRoute } from '@angular/router';
import { UserCreateDto } from 'src/app/features/auth/models/create-req';
import { MatDialog } from '@angular/material/dialog';
import { CreateTaskComponent } from '../create-task/create-task.component';
import { StateService } from '../../service/state.task.service';
import { StateTask } from '../../models/StateTask';
import { TaskService } from '../../service/task.service';
import { UserService } from 'src/app/service/user.service';
import { UpdateTaskComponent } from '../update-task/update-task.component';


@Component({
  selector: 'app-list-task',
  templateUrl: './list-task.component.html',
  styleUrls: ['./list-task.component.css']
})
export class ListTaskComponent implements OnInit {

  tasks: TaskDto[] = [];
  stateTask:StateTask[]=[]
  userId:string;

  constructor(
    private userService: UserService,
    private taskService:TaskService,
    private route: ActivatedRoute,
    private dialog: MatDialog,
    private stateService:StateService
  ) {}

  ngOnInit(): void {
    this.loadTask();
  }

  loadTask(){
    this.route.params.subscribe(params => {
      const id = +params['id'];
      this.userId=params['id']
      this.userService.getTasks(id).subscribe({
          next: (data: TaskDto[]) => {
              this.tasks = data;
          },
          error: (error) => console.error('Error user', error)
      });
  });
  }
  
  openCreateTaskDialog(): void {
    const dialogRef = this.dialog.open(CreateTaskComponent, {
      data: { userId: this.userId } 
    });
  
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.ngOnInit(); 
      }
    });
  }

  openUpdateTaskDialog(taskId: number): void {
    const dialogRef = this.dialog.open(UpdateTaskComponent, {
      data: { taskId } 
    });
  
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.loadTask(); 
      }
    });
  }
  deleteTask(taskId: number) {
    this.taskService.deleteTask(taskId).subscribe({
      next: () => {
        this.loadTask(); 
      },
      error: (err) => {
        console.error('Error al eliminar la tarea', err);
      }
    });
  }

  
  
}
