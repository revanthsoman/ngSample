import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { EmailValidator } from '@angular/forms';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})


export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    setTimeout(()=>{

      this.email.emit('rev@gmail')
    },5000)

  }

  @Input() phoneNum;
  @Output() email= new EventEmitter<string>();

}
