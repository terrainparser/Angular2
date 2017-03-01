import {Component} from '@angular/core';

@Component({
    selector:"zippy",
    template:`<div class="container">
                <div class="panel panel-primary">
                    <div class="panel-heading">
                        <span class="row">
                            <span class="col-md-3"><ng-content select=".zippyHeading"></ng-content></span>
                            <span class="col-md-offset-8"> 
                                <i [ngClass]="{'glyphicon glyphicon-chevron-down': isActive,
                                              'glyphicon glyphicon-chevron-down': !isActive}"></i>
                            </span>
                        </span>
                    </div>
                    <div class="panel-body"><ng-content select=".zippyBody"></ng-content></div>     
                </div>           
              </div>`
})

export class ZippyComponent{
    isActive:boolean;
}