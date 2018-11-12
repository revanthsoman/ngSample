import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  wishMsg;
  phoneNum=1234;
  email;

  handleClick() {
    this.wishMsg = 'Hi'
  }
  handleClick1()
  {
    this.wishMsg = 'Hi Revanth'
  }
}
