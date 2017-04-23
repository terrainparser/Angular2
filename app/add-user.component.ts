import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
    selector: 'add-user',
    templateUrl: 'app/add-user.component.html'
})

export class AddUserComponent {
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

    addUserFormGroup: FormGroup;

    constructor(fb:FormBuilder) {
        this.addUserFormGroup = fb.group({
            name: ['', Validators.required],
            email: ['', Validators.required],
            phone: ['', Validators.required],
            street: ['', Validators.required],
            suite: ['', Validators.required],
            city: ['', Validators.required],
            zipCode: ['', Validators.required],
        });
    }
}