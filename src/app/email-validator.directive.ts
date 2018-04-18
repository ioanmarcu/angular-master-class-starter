import {Directive} from '@angular/core';
import {FormControl, NG_VALIDATORS} from '@angular/forms';

@Directive({
  selector: '[trmValidateEmail][ngModel]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useValue: validateEmail,
      multi: true
    }
  ]
})
export class EmailValidatorDirective {

  constructor() {
  }
}
  function validateEmail(c: FormControl) {
    const VALID_EMAIL = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
    const valid = VALID_EMAIL.test(c.value);
    return !valid ? {
      validateEmail: {
        valid: false
      }
    } : null;
  }

