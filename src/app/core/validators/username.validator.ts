import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function usernameValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value: string = control.value;

    const haveSpecialCharacter = value[0] === '@';

    //==  -- el valor sea igual
    //=== -- el tipo sea igual

    return haveSpecialCharacter
      ? null
      : [{ usernameValidator: true, data: 'No tiene una @' }];
  };
}
