import { Component, OnInit } from '@angular/core';
import { UserCreateDto } from '../../models/create-req';
import { MatDialogRef } from '@angular/material/dialog';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { UserService } from 'src/app/service/user.service';


@Component({
  selector: 'app-regsiter',
  templateUrl: './regsiter.component.html',
  styleUrls: ['./regsiter.component.css']
})
export class RegsiterComponent implements OnInit {

  userCreateDto: UserCreateDto = { name: '', email: '', password: '' };
  errorMessage: string = '';
  hide: boolean = true;

  constructor(
    public dialogRef: MatDialogRef<RegsiterComponent>,
    private userService: UserService
  ) {}

  ngOnInit(): void {
      
  }
  onCancel(): void {
    this.dialogRef.close();
  }

  onSubmit(): void {
    this.userService.createUser(this.userCreateDto).pipe(
      catchError(err => {
        this.errorMessage = 'Error al crear el usuario';
        console.error(err);
        return of(null);
      })
    ).subscribe(response => {
      if (response) {
        this.dialogRef.close(this.userCreateDto);
      }
    });
  }

}
