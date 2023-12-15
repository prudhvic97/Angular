import { Directive, ElementRef, OnInit } from "@angular/core";


@Directive({
    selector: '[basicDirective]'
})


export class BasicDirective implements OnInit {

    constructor(private ElRef: ElementRef) {

    }

    ngOnInit() {
        this.ElRef.nativeElement.style.backgroundColor = 'green'
    }
}