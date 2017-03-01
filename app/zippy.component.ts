import {Component, Input} from '@angular/core';

@Component({
    selector:"zippy",
    template:`<div class="container">
                <div class="panel panel-primary">
                    <div class="panel-heading" (click)="onHeadingClick()">
                        <span class="row">
                            <span class="col-md-3"><ng-content select=".zippyHeading"></ng-content></span>
                            <span class="col-md-offset-8"> 
                                <i class="glyphicon" [ngClass]="{'glyphicon-chevron-down': !isActive,
                                              'glyphicon-chevron-up': isActive}" 
                                              ></i>
                            </span>
                        </span>
                    </div>
                    <div class="panel-body" *ngIf="isActive"><ng-content select=".zippyBody"></ng-content></div>     
                </div>           
              </div>`
})

export class ZippyComponent{
    @Input() isActive:boolean;

    onHeadingClick(){
        this.isActive=!this.isActive;
    }
}