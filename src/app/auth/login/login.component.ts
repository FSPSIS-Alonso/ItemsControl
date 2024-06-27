import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  private fb: FormBuilder = inject(FormBuilder);
  authService: AuthService = inject(AuthService);
  private router: Router = inject(Router);
  private _loginForm: FormGroup;

  private _tryLogin: boolean = false;

  constructor() {
    //dbName
    //user
    //psw
    this._loginForm = this.fb.group({
      dbName: ['', [Validators.minLength(3), Validators.required]],
      user: ['', [Validators.minLength(2), Validators.required]],
      psw: ['', [Validators.required]],
    });
  }

  logUser() {
    console.clear();

    this._tryLogin = true;
    if (!this._loginForm.valid) {
      this._loginForm.markAsDirty({ onlySelf: false });
      Object.keys(this._loginForm.controls).forEach((key: string) => {
        this._loginForm.get(key)?.markAsDirty();
        this._loginForm.get(key)?.markAsTouched();
      });
      return;
    }
    const { user, dbName, psw } = this._loginForm.value;
    this.authService.login(user, dbName, psw).subscribe({
      next: (data) => {
        console.log('NEXT');
        this.router.navigate(['/home']);
      },
      error: () => {
        console.log('ERROR');
      },
      complete: () => {
        console.log('COMP');
      },
    });
  }

  isValidControlRequired(control: string) {
    let controlInput = this._loginForm.get(control);
    if (!controlInput?.hasValidator(Validators.required)) return false;
    return !controlInput?.valid && controlInput?.dirty && this._tryLogin;
  }

  isValidControlLength(control: string, long: number) {
    let controlInput = this._loginForm.get(control);
    return (
      !controlInput?.valid &&
      controlInput?.dirty &&
      this._tryLogin &&
      controlInput?.value.length < long
    );
  }

  get loginForm() {
    return this._loginForm;
  }
  get tryLogin() {
    return this._tryLogin;
  }
}
