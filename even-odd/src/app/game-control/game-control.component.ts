import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrl: './game-control.component.css'
})
export class GameControlComponent {

  @Output() dataEven = new EventEmitter<number>();
  @Output() dataOdd = new EventEmitter<number>();

  count: number = 0;
  counter: any;
  disabled = false;

  timerStart() {
    this.counter = setInterval(() => {
      this.count++;
      if(this.count %2 == 0){
        this.dataEven.emit(this.count );
      }else{
        this.dataOdd.emit(this.count) ;
      } 
    }, 1000);
    this.disabled = true;
  }
  timerStop(reset: number) {
    if (reset == 1) {
      clearInterval(this.counter)
      this.disabled = false;

    } else {
      clearInterval(this.counter),
        this.count = 0;
        this.dataOdd.emit(this.count) ;
        this.dataEven.emit(this.count) ;
        this.disabled = false;
    }

  }
}
