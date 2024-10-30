import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegsiterComponent } from './components/regsiter/regsiter.component';
import { LoginComponent } from './components/login/login.component';

import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';

import { AuthRoutingModule } from './auth.router';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    RegsiterComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule, 
    FormsModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
  ],
})
export class AuthModule { }
