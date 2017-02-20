import {Directive, ElementRef, Renderer} from 'angular2/core';

@Directive({
    selector:'[autogrow]',
    host:{
        '(focus)':'onFocus()',
        '(blur)':'onBlur()'
    }
})
export class AutoGrowDirective{
    constructor(private el:ElementRef, private renderer:Renderer){

    }
    onFucus(){
        this.renderer.setElementStyle(this.el,'width','200');
    }

    onBlur(){
        this.renderer.setElementStyle(this.el,'width','120');
    }

}