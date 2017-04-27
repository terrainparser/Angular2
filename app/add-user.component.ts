import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { EmailValidators } from './email.validator';
import { FormComponent } from './prevent-unsaved-changes-guard.service';

@Component({
    selector: 'add-user',
    templateUrl: 'app/add-user.component.html'
})

export class AddUserComponent implements FormComponent {
    User: {
        Name: string,
        Email: string,
        Phone: string,
        Address: {
            Street: string,
            Suite: string,
            City: string,
            ZipCode: string,
        }
    }
    form: FormGroup;
    // addUserFormGroup: FormGroup;
    constructor(fb: FormBuilder) {
        this.form = fb.group({
            name: ['', Validators.required],
            // email:['', EmailValidators.InvalidEmail],
            email: ['', Validators.compose([Validators.required, EmailValidators.InvalidEmail])],
            phone: ['', Validators.required],
            street: ['', Validators.required],
            suite: ['', Validators.required],
            city: ['', Validators.required],
            zipCode: ['', Validators.required],
        });
    }

    OnFormSave() {
    }

    IsFormValid() {
        return this.form.valid;
    }
}