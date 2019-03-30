import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Lab Session 2';
  counter = 0;

  test(){

  }
//method or function that is auto executed once the component is created
  constructor(){
    console.log("Im the constructor for AppComponent");
    this.sayHello();
  }

  increaseCounter(){
    this.counter+=1;
  }

  sayHello(){
    var name = "Alexander"
    console.log(name);

    var luckyNumber:number=2;
    var myName:string="Alexander Peloquin";
    var isValud:boolean=false;
    var anything:any="Whatever";
  }
}

