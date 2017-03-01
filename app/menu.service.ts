import {Component} from '@angular/core';

export class MenuService{
    getMenuDetails(){
        return [{"Settings":["ChangePassword","Contact Us","About"]},
                {"UpdatePersonalDetails":["Add Phone Number","Update Location"]},
                {"Home":["My Wall","Activity Feed"]}
               ];
    }

    
}
export interface MenuItem{
    menuHeading:string;
    menuDetails:string;
        
}