import {Component} from '@angular/core';
//import {FormsModule} from '@angular/forms';

@Component({
    selector:"userForm",
    templateUrl:'app/userForm.html'
})

export class UserFormComponent{
    onSubmit(form){
        console.log(form);
    }
}