import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogRef } from '@angular/material/dialog';
import { of, throwError } from 'rxjs';
import { RegsiterComponent } from './regsiter.component';
import { UserService } from 'src/app/service/user.service';
import { UserCreateDto } from '../../models/create-req';

describe('RegsiterComponent', () => {
  let component: RegsiterComponent;
  let fixture: ComponentFixture<RegsiterComponent>;
  let userServiceMock: jasmine.SpyObj<UserService>;
  let dialogRefMock: jasmine.SpyObj<MatDialogRef<RegsiterComponent>>;

  beforeEach(async () => {
    userServiceMock = jasmine.createSpyObj('UserService', ['createUser']);
    dialogRefMock = jasmine.createSpyObj('MatDialogRef', ['close']);

    await TestBed.configureTestingModule({
      declarations: [RegsiterComponent],
      providers: [
        { provide: UserService, useValue: userServiceMock },
        { provide: MatDialogRef, useValue: dialogRefMock },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegsiterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should close dialog on cancel', () => {
    component.onCancel();
    expect(dialogRefMock.close).toHaveBeenCalled();
  });

  it('should create user and close dialog with user data on success', () => {
    const userCreateDto: UserCreateDto = { name: 'John Doe', email: 'john.doe@example.com', password: 'password' };
    component.userCreateDto = userCreateDto;
    userServiceMock.createUser.and.returnValue(of(userCreateDto)); 

    component.onSubmit();

    expect(userServiceMock.createUser).toHaveBeenCalledWith(userCreateDto);
    expect(dialogRefMock.close).toHaveBeenCalledWith(userCreateDto);
  });

  it('should handle error on user creation and set errorMessage', () => {
    userServiceMock.createUser.and.returnValue(throwError('Error al crear usuario')); 

    component.onSubmit();

    expect(component.errorMessage).toBe('Error al crear el usuario');
    expect(dialogRefMock.close).not.toHaveBeenCalled(); 
  });
});
