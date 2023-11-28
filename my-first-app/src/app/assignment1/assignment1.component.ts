import { Component } from '@angular/core';

@Component ({
    selector : 'app-assignment1',
    styles : `.gr {
        background-color: green;
    }`,
    templateUrl: './assignment1.component.html'   
})


export class Assignment1Component {

    title : string = '';

    btn :boolean = true;

    constructor(){

    }


    resetButton(){
        this.title = '';
    }

}