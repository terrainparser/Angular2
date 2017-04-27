import { Validators, FormGroup } from '@angular/forms';

export class EmailValidators {
    static InvalidEmail(fg: FormGroup) {
        var EMAIL_REGEXP = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
        if (!EMAIL_REGEXP.test(fg.value)) {
            return { incorrectEmailFormat: true };
        }
    }
}