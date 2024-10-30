import { Component, OnInit, Inject } from '@angular/core';
import { TaskDto } from '../../models/TaskDto';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { TaskService } from '../../service/task.service';
import { TaskCreate } from '../../models/Task';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-update-task',
  templateUrl: './update-task.component.html',
  styleUrls: ['./update-task.component.css']
})
export class UpdateTaskComponent implements OnInit {
  public idTask:number;
  public task: TaskCreate = {
    description: "",
    date: "",
   
  };

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { taskId: number },
    private taskService: TaskService,
    private dialogRef: MatDialogRef<UpdateTaskComponent>,
    private datePipe: DatePipe
  ) {}

  ngOnInit(): void {
    this.loadTaskData();
  }

  loadTaskData(): void {
    this.taskService.getTaskById(this.data.taskId).subscribe({
      next: (taskData: TaskDto) => {
        this.task.description;
        this.task.date
        this.idTask=this.data.taskId
      },
      error: (error) => {
        console.error('Error loading task data', error);
      }
    });
  }

  updateTask(): void {
    const formattedDate = this.datePipe.transform(this.task.date, 'dd/MM/yyyy');
    if (formattedDate) {
      this.task.date = formattedDate;
    }
    this.taskService.updateTask(this.idTask, this.task).subscribe({
      next: (updatedTask: TaskCreate) => {
        this.dialogRef.close(updatedTask);
      },
      error: (error) => {
        console.error('Error updating task', error);
      }
    });
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}
