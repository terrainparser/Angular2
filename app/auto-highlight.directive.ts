import {Directive, ElementRef, Renderer} from 'angular2/core';

@Directive({
    selector:'[autoHighlight]',
    host:{
        '(focus)':'onFocus()',
        '(blur)':'onBlur()'
    }
})


export class AutoHighlightDirective{

    constructor(private el:ElementRef, private renderer: Renderer ){}

    onFocus(){
        console.log("inside on Focus highlighter")
        this.renderer.setElementStyle(this.el.nativeElement,'background','yellow');
    }

    onBlur(){
          //this.renderer.setElementStyle(this.el.nativeElement,'background-color','none');
    }
}