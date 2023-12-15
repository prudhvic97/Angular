import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  oddCount:number;
  evenCount:number;

  countEven(count:number){
    this.evenCount = count;
  }
  countOdd(count:number){
    this.oddCount = count;
  }

}
