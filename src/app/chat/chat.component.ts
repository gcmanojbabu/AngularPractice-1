import { Component, ViewChild, AfterViewInit, OnInit } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit, AfterViewInit{

  idNum =0;
  messages = [];
  temp ='';

  @ViewChild(FooterComponent) child;
  
  constructor() { }
  
  sendingMessage:string;
  
  ngAfterViewInit() {  
    this.sendingMessage= this.child.sendingMessage;  
    }  

  ReceivedMessage:string;

  receiveMessage($event: string) {
    this.ReceivedMessage = $event;
    this.idNum=this.idNum+1;
    this.messages.push({id: this.idNum, msg: this.ReceivedMessage});
    if (this.idNum==1){
      this.temp = this.ReceivedMessage;
    }
    
  }

  ngOnInit(): void {
  }

}
