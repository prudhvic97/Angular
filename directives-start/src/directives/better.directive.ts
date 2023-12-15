import {
    OnInit,
    Directive,
    ElementRef,
    Renderer2,
    HostListener,
    HostBinding
} from "@angular/core";

@Directive({
    selector: '[appBetter]'
})

export class BetterDirective implements OnInit {

@HostBinding('style.backgroundColor') backgroundColor:string = 'transparent';

    constructor(private elRef: ElementRef, private renderer: Renderer2) { }

    ngOnInit() {
        // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'yellow')
    }

    @HostListener('mouseover')
    mouseover(eventData: Event) {
        // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'yellow');
        this.backgroundColor = 'yellow'
    }

    @HostListener('mouseleave')
    mouseleave(eventData: Event) {
        // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'transparent')
        this.backgroundColor  = 'transparent'
    }


    // @HostListener('mouseover')
    //     mouseover(event : Event) {
    //     this.renderer.setStyle(this.elRef.nativeElement,'background-color','yellow');
    // }

    // @HostListener('mouseleave')
    //     mouseleave(event : Event) {
    //     this.renderer.setStyle(this.elRef.nativeElement,'background-color','transparent')
    // }
}