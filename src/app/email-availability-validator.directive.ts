import {Directive} from '@angular/core';
import {FormControl, NG_ASYNC_VALIDATORS} from '@angular/forms';
import {map} from 'rxjs/operators';
import {ContactService} from './contact.service';


@Directive({
  selector: '[trmCheckEmailAvailability][ngModel]',
  providers: [
    {
      provide: NG_ASYNC_VALIDATORS,
      useExisting: EmailAvailabilityValidatorDirective,
      multi: true
    }
  ]
})

export class EmailAvailabilityValidatorDirective {
  _validate: Function;

  constructor(private contactService: ContactService) {
    this._validate = checkEmailAvailability(contactService);
  }

  validate(c: FormControl) {
    return this._validate(c);
  }

}
function checkEmailAvailability(contactService: ContactService) {
  return (c: FormControl) => {
    return contactService.isEmailAvailable(c.value)
      .pipe(map(response => !response.error ? null : {
        emailTaken: true
      }));
  };
}

