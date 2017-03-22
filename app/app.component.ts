import {Component} from '@angular/core';
import {SignUpFormComponent} from './signup-form.component';
import {FormGroup, FormBuilder ,Validators} from '@angular/forms';
import {Observable}  from 'rxjs/Observable';
import 'rxjs/add/operator/debounceTime';

@Component({
    selector: 'my-app',
    template: `
        <form [formGroup]="form">
            <input type="text" formControlName="search">
        </form>
    `
})

export class AppComponent {

    form:FormGroup
    constructor(fb:FormBuilder){
        this.form=fb.group({
                search:[]
        })

        var search=this.form.get('search');
        search.valueChanges.debounceTime(400).map(str=>(<string>str).replace(' ', '-')).subscribe(x=>console.log(x));
    }
}
