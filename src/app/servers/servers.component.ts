import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  serverCreated:boolean = false;
  servers = ['Testserver','Testserver 2'];
  serverName:string = "";
  serverCreationStatus:string = "";

  constructor() { }

  createServer(){
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'Server was created! Name is ' + this.serverName;
    console.log(this.servers);
  }
  ngOnInit() {
  }

  onUpdateServerName(event: Event){
      this.serverName = (<HTMLInputElement>event.target).value;
  }

}
