import { AfterContentInit, Directive, ElementRef, Input } from '@angular/core';

@Directive({
    selector: '[appFocus]'
})
export class OnFocusDirective implements AfterContentInit{
    @Input() public autoFocus: boolean;

    constructor(private el: ElementRef){}

    ngAfterContentInit(): void {
        setTimeout( () => {
            this.el.nativeElement.focus();
        }, 500)
    }
}