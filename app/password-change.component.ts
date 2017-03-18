
import {Component} from '@angular/core';
import {FormGroup, FormBuilder ,Validators} from '@angular/forms';

@Component({
    selector:'change-password',
    templateUrl:'app/password-change.html'
})
export class PasswordChangeComponent{

    changePasswordForm:FormGroup;

    constructor(fb:FormBuilder){
        this.changePasswordForm= fb.group({
            oldPassword:['',Validators.required],
            newPassword:['',Validators.compose([Validators.required,Validators.minLength(3)])],
            confirmPassword:['',Validators.required]
        })
    }
}