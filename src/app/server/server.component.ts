import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent{
   test:string = "String Interpolation";

   allowNewServer:boolean = false;
   serverName:string = "";
   serverCreated:boolean = false;
   clicker(){
       console.log("hello");
       this.serverCreated = true;
   }

   onUpdateServerName(event: Event){
        this.serverName = (<HTMLInputElement>event.target).value;
   }
}