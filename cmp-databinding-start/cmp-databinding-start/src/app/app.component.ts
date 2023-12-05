import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements = [];

  onSrvAdded(serverData:{type:string, name:string , content :string}){
    console.log(serverData.name,serverData.content)
           this.serverElements.push({
            type : serverData.type,
            name: serverData.name,
            content:serverData.content
           })
           console.log(this.serverElements)
  }
  onBpAdded(serverData:{type:string, name:string , content :string}){
    this.serverElements.push({
     type : serverData.type,
     name: serverData.name,
     content:serverData.content
    })
    console.log(serverData)
}
}
