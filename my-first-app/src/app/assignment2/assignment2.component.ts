import { Component } from '@angular/core';

@Component ({
    selector : 'app-assignment2',
    templateUrl: './assignment2.component.html',
    styles:`
    .re {
        background-color: yellow;
    }`
})


export class Assignment2Component {
     toggleParagh = false;
     data :any= [];
     count : number = 0;
     date = new Date();

    paraghToggle(){
        this.data.push(this.date);
        this.count += this.count;
        this.toggleParagh = !this.toggleParagh;
        console.log(this.date);
    }
    getColour(){
        return this
    }
}