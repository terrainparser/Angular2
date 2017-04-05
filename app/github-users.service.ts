import {Http} from '@angular/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/forkJoin';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubUsersService{
    baseUrl='https://api.github.com/users/';
    constructor(private _http:Http){
    }

    getUsersAndFollowers(userName:string){
        var userStream= Observable.of(
                            this._http.get(this.baseUrl + userName).map(res=>res.json())
                            );
                            //userStream.mergeMap(x=>x).subscribe(x=>console.log(x));
        var followerStream  = Observable.of(
                    this._http.get(this.baseUrl +userName +'/followers').map(res=>res.json())
                    );
                    //followerStream.mergeMap(x=>x).subscribe(x=>console.log(x));
        var resultStream = Observable.forkJoin(userStream.mergeMap(x=>x),followerStream.mergeMap(x=>x)).delay(2000);
        return  resultStream;
    }
}