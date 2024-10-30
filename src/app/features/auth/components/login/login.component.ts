import { Component, OnInit } from '@angular/core';
import { UserLoginDto } from '../../models/auth-req.model';
import { AuthService } from '../../services/aut.service';
import { MatDialog } from '@angular/material/dialog';
import { RegsiterComponent } from '../regsiter/regsiter.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email = '';
  password = '';
  hide = true;
  errorMessage: string | null = null;

  constructor(
    private authService: AuthService,private dialog: MatDialog,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  login() {

    const userLoginDto: UserLoginDto = {
      email: this.email,
      password: this.password
    };
    this.authService.login(userLoginDto).subscribe(
      success => {
        if (success) {
          const userId = success;
          this.router.navigate(['/task', userId]);
        } else {
          console.error('Login fallido');
          console.error('Login failed:');
          this.errorMessage = 'Credenciales inválidas. Por favor, inténtalo de nuevo.';
        }
      },
      error => {
        console.error('Error en la solicitud', error);
        this.errorMessage = 'Credenciales inválidas. Por favor, inténtalo de nuevo.';
      }
    );
  }

  openUserCreateDialog(): void {
    const dialogRef = this.dialog.open(RegsiterComponent);
  
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log('User created:', result);
      }
    });
  }
  
}
