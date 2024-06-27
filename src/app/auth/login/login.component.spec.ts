import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { HttpClientModule } from '@angular/common/http';
import { InputTextModule } from 'primeng/inputtext';
import { FloatLabelModule } from 'primeng/floatlabel';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { of, throwError } from 'rxjs';
import { Router } from '@angular/router';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let authService: AuthService;
  let router: Router;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [
        HttpClientModule,
        InputTextModule,
        FloatLabelModule,
        ReactiveFormsModule,
        FormsModule,
      ],
      providers: [AuthService, Router],
    }).compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    authService = TestBed.inject(AuthService);
    router = TestBed.inject(Router);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Login user with failures', () => {
    expect(component.tryLogin)
      .withContext('Probar trylogin a false')
      .toBeFalsy();
    expect(component.loginForm.dirty)
      .withContext('Formulario sucio en false')
      .toBeFalsy();
    component.logUser();
    expect(component.tryLogin)
      .withContext('Probar trylogin a true')
      .toBeTruthy();
    expect(component.loginForm.dirty)
      .withContext('Formulario sucio en true')
      .toBeTruthy();
  });

  it('Probar login valido', () => {
    expect(component.tryLogin)
      .withContext('Probar trylogin a false')
      .toBeFalsy();
    expect(component.loginForm.dirty)
      .withContext('Formulario sucio en false')
      .toBeFalsy();

    let spy = spyOn(authService, 'login').and.returnValue(of(true));
    let spyR = spyOn(router, 'navigate');
    component.loginForm.get('dbName')?.setValue('aaa');
    component.loginForm.get('user')?.setValue('aaa');
    component.loginForm.get('psw')?.setValue('aaa');
    component.logUser();

    expect(component.tryLogin)
      .withContext('Probar trylogin a true')
      .toBeTruthy();
    expect(component.loginForm.dirty)
      .withContext('Formulario sucio en false')
      .toBeFalse();

    expect(spy).toHaveBeenCalled();
    expect(spyR).toHaveBeenCalled();
  });

  it('Probar login valido con error', () => {
    expect(component.tryLogin)
      .withContext('Probar trylogin a false')
      .toBeFalsy();
    expect(component.loginForm.dirty)
      .withContext('Formulario sucio en false')
      .toBeFalsy();

    let spy = spyOn(authService, 'login').and.returnValue(
      throwError(() => new Error('error'))
    );
    let spyR = spyOn(router, 'navigate');
    component.loginForm.get('dbName')?.setValue('aaa');
    component.loginForm.get('user')?.setValue('aaa');
    component.loginForm.get('psw')?.setValue('aaa');
    component.logUser();

    expect(component.tryLogin)
      .withContext('Probar trylogin a true')
      .toBeTruthy();
    expect(component.loginForm.dirty)
      .withContext('Formulario sucio en false')
      .toBeFalse();

    expect(spy).toHaveBeenCalled();
    expect(spyR).toHaveBeenCalledTimes(0);
  });

  it('validar isValidControlRequired', () => {
    expect(component.isValidControlRequired('test')).toBeFalsy();
    component.logUser();
    expect(component.isValidControlRequired('psw')).toBeTruthy();
    component.loginForm.get('psw')?.setValue('aaa');
    component.logUser();
    expect(component.isValidControlRequired('psw')).toBeFalse();
  });
});
