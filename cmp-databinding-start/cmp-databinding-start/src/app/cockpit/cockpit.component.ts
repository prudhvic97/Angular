import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrl: './cockpit.component.css'
})
export class CockpitComponent {

  @Output() srvAdded = new EventEmitter<{type :string , name :string , content :string}>();
  @Output() bpAdded = new EventEmitter<{type :string , name :string , content :string}>();


  newServerName:string;
  newServerContent:string;

  onAddServer() {
      this.srvAdded.emit({type:'server',name:this.newServerName,content:this.newServerContent})
  }

  onAddBlueprint() {
    this.srvAdded.emit({type:'blueprint',name:this.newServerName,content:this.newServerContent})
  }
}
