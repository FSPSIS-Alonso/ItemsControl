import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { HttpClientModule } from '@angular/common/http';
import { InputTextModule } from 'primeng/inputtext';
import { FloatLabelModule } from 'primeng/floatlabel';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { of } from 'rxjs';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let authService: AuthService;
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
      providers: [AuthService],
    }).compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    authService = TestBed.inject(AuthService);
    component.authService = authService;
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

    let spy = spyOn(authService, 'login');
    component.loginForm.get('dbName')?.setValue('aaa');
    component.loginForm.get('user')?.setValue('aaa');
    component.loginForm.get('psw')?.setValue('aaa');
    component.logUser();

    expect(component.tryLogin)
      .withContext('Probar trylogin a true')
      .toBeTruthy();
    expect(component.loginForm.dirty)
      .withContext('Formulario sucio en true')
      .toBeTruthy();

    expect(spy).toHaveBeenCalled();
  });
});
