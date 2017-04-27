import { Router, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { MessagesComponent } from './messages/messages.component';
import { UsersComponent } from './users.component';
import { PostsComponent } from './posts.component';
import { AddUserComponent } from './add-user.component';
import {PreventUnsavedChangesGuard} from './prevent-unsaved-changes-guard.service';


import { NotFoundComponent } from './not-found.component';

export const routing = RouterModule.forRoot([
    { path: '', component: HomeComponent },
    { path: 'users', component: UsersComponent },
    { path: 'users/new', component: AddUserComponent, canDeactivate:[PreventUnsavedChangesGuard] },
    { path: 'posts', component: PostsComponent },
    { path: '**', component: HomeComponent },
]);