import { Component, OnInit,Inject } from '@angular/core';
import { DatePipe } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { MatDialogRef,MAT_DIALOG_DATA  } from '@angular/material/dialog';

import { TaskService } from '../../service/task.service';
import { TaskCreate } from '../../models/Task';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css'],
  providers: [DatePipe]
})
export class CreateTaskComponent implements OnInit {

  public task:TaskCreate={
    date: "", description: "",
  };
  

  constructor(
    private taskService: TaskService,
    private route: ActivatedRoute,
    public dialogRef: MatDialogRef<CreateTaskComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { userId: string },
    private datePipe: DatePipe
  ) { }

  ngOnInit(): void {
  }

  onSubmit() {
    const formattedDate = this.datePipe.transform(this.task.date, 'dd/MM/yyyy');
    if (formattedDate) {
      this.task.date = formattedDate;
    }
    this.route.params.subscribe(params=>{
      console.log(this.data.userId);
      this.taskService.createTask(+this.data.userId, this.task).subscribe(
        (newTask) => {
          console.log('Tarea creada', newTask);
          this.dialogRef.close(true);
        },
        (error) => {
          console.error('Error al crear la tarea', error);
        }
      );
    });
    
  }

  onCancel(): void {
    this.dialogRef.close();
  }


}