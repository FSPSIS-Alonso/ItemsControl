import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  private fb: FormBuilder = inject(FormBuilder);
  private _loginForm: FormGroup;

  private _tryLogin: boolean = false;

  constructor() {
    //dbName
    //user
    //psw
    this._loginForm = this.fb.group({
      dbName: ['', [Validators.minLength(3), Validators.required]],
      user: ['', [Validators.minLength(3), Validators.maxLength(4)]],
      psw: ['', [Validators.required, Validators.minLength(3)]],
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
    console.log(this._loginForm.get('psw'));
    console.log(this._loginForm.value);
    console.log(this._loginForm.valid);
  }

  isValidControlRequired(control: string) {
    let controlInput = this._loginForm.get(control);
    if (!controlInput?.hasValidator(Validators.required)) return false;
    return !controlInput?.valid && controlInput?.dirty && this._tryLogin;
  }
  isValidControlLength(control: string, long: number) {
    let controlInput = this._loginForm.get(control);
    console.log(controlInput?.value.length);
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
}
