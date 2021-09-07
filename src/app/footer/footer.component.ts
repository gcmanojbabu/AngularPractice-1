import { Component, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  inputMessage= '';

  placeholder='Type here...';
  sendingMessage = 'Hello!';
  message2: string = "Hola Mundo!";
  
  constructor() { }
  
  @Output() messageEvent = new EventEmitter<string>();
  
  ngOnInit(): void {
  }

  sendMessage() {
    this.messageEvent.emit(this.inputMessage);
    
    this.inputMessage='';
    this.placeholder='Sent!';
    setTimeout(() => {
      this.placeholder = 'Type here...';
    }, 2000)
  }

}
