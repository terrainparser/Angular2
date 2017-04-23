import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class UsersService {
    users=[];
    constructor(private _http: Http) {

    }

    getUsers() {
       var res= this._http.get("https://jsonplaceholder.typicode.com/users")
            .mergeMap(x => x.json());
        //.subscribe(x =>console.log(x));
        res.subscribe(x => {this.users.push(x); console.log(x);});

        return this.users;
    }
}