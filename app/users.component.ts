import { Component } from '@angular/core';
import { UsersService } from './users.service';

@Component({
    selector: 'users-component',
    templateUrl: 'app/users.component.html'
})
export class UsersComponent {
    users=[];
    constructor(private _usersService: UsersService) {
        this.users = _usersService.getUsers();
        console.log(this.users);
    }

}