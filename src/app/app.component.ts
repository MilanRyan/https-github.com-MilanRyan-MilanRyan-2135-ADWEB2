import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  myName = 'clientName ';

cLientName:String = "clientName";

num1: number;
num2: number;
result: number;

calculatesum(){

  this.result = this.num1 = this.num2
}

}
