import { Component } from '@angular/core';
import { SignUpFormComponent } from './signup-form.component';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { GithubUsersService } from './github-users.service';
// import { NavbarComponent } from './navbar.component';


import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/timeout';
import 'rxjs/add/operator/retry';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/from';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/empty';
import 'rxjs/add/observable/range';
import 'rxjs/add/observable/interval';
import 'rxjs/add/observable/forkJoin';

@Component({
    selector: 'my-app',
    template: ` <router-outlet></router-outlet>`
    // templateUrl:'app/github-users.component.html',
    //templateUrl:'/app/app.component.html',
    // template:`<ul>
    //             <li><a routerLink="">Home</a></li>
    //             <li><a routerLink="messages">Messages</a></li>
    //             <li><a routerLink="photos">Photos</a></li>
    //             </ul>
    //             <router-outlet></router-outlet>`,
    // styles: [`.avatar{
    //             width:100px;
    //             height:100px;
    //             border-radius:50%;
    //             };`]
})

// @Component({
//     selector: 'my-app',
//     template: `
//         <form [formGroup]="form">
//             <input type="text" formControlName="search">
//         </form>
//     `
// })

export class AppComponent {
    // isLoading=true;
    // data = { 'user': [], 'followers': [] };
    // constructor(githubUserService: GithubUsersService) {
    //    console.log('initializing :'+ new Date());
    //     var data = githubUserService.getUsersAndFollowers('octocat')
    //         .map(res => { return { 'user': res[0], 'followers': res[1] } }).debounceTime(500);

    //     data.subscribe((x) => {
    //         this.data = x;
    //         //    this.data.user=x.user;
    //         //    this.data.followers=x.followers
    //     },error => console.log(error),()=> {this.isLoading=false;
    //     console.log('Completed Loading:'+ new Date());});

    //     console.log(this.data);
    // }
    // form:FormGroup
    // constructor(fb:FormBuilder){
    //     this.form=fb.group({
    //             search:[]
    //     })

    //     var search=<FormControl>this.form.controls['search'];
    //Issue 1
    //console.log(search);
    //search.debounceTime(400).map(str=>(<string>str).replace(' ', '-')).valueChanges.subscribe(x=>console.log(x));


    /*var startDates=[];
    var startDate=  new Date();

    for(var day=-2;day<2;day++)
    {
        var date= new Date(startDate.getFullYear(), startDate.getMonth(), startDate.getDate()+day);
        startDates.push(date);
    }
    Observable.from(startDates)
            .map(date=>{console.log("Getting deals for date "+date);
            return [1,2,3]})
            .subscribe(x=>console.log(x));*/
    //var observable= Observable.from([1,2,3]);
    //  var observable= Observable.interval(1000).mergeMap(x=>{console.log("calling the server to get tweets");
    //                                                     return [1,2,3];});

    //observable.subscribe(x=>console.log(x));
    // var userStream= Observable.of({'userId':'1','userName':'Harry'}).delay(2000);
    // var tweetStream= Observable.of([1,2,3]).delay(1500);
    //  Observable.forkJoin(userStream, tweetStream).map(joined=>new Object({'user':joined[0],'tweets':joined[1]})).subscribe(x=>console.log(x));

    // var observable= Observable.throw(new Error("Something failed inside"));
    // observable.subscribe(x=>console.log(x),error=>console.log(error));

    // var counter= 0;
    // var ajaxCall= Observable.of('url')
    //             .mergeMap(()=>{if(++counter<2)
    //                             return Observable.throw(new Error("Something failed inside"))
    //                           else
    //                             return Observable.of([1,2,3]);
    //                            });
    //  ajaxCall.retry(3).subscribe(x=>console.log(x), error=>console.log(error));

    //         var remoteDatastream = Observable.throw(new Error('error')).delay(50);
    // remoteDatastream.timeout(200).subscribe(x => console.log(x), error => console.log(error), () => console.log('completed'));
    // remoteDatastream.catch(()=>{var localDataStream = Observable.of([1,2,3]);
    //                             return localDataStream})
    //                 .subscribe(x=>console.log(x))
    //}
}
