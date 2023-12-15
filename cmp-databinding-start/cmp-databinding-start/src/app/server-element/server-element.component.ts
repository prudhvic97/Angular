import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrl: './server-element.component.css',
})
export class ServerElementComponent implements OnInit,OnChanges{

  @Input() elements: { type: string, name: string, content: string };

  constructor() {
    console.log('This is from constructor')
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('This is from Onchanges'),
    console.log(changes)
  }
  ngOnInit(){
    console.log('This is from Oninit')
  }
  ngOnDestroy(){

    console.log('this is from OnDestroy')
  }

}
