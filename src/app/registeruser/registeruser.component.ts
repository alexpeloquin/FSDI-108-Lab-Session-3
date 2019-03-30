import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { DataService } from '../data.service';

@Component({
  selector: 'app-registeruser',
  templateUrl: './registeruser.component.html',
  styleUrls: ['./registeruser.component.css']
})
export class RegisteruserComponent implements OnInit {

  userModel: User = new User();
  pass2:String;
  passMatchError = false;


  //public or private below makes this a class attribute
  //public accessiable from other components
  //private only on the file
  constructor(public dataSrv  : DataService) { 
    console.log("constructor of register user");
  }

  ngOnInit() {
    console.log("register user intialized");
  }

  save(){
    this.dataSrv.addUser(this.userModel);
    //clear the input form
    this.userModel = new User(); //clears the model variables
    this.pass2 = ""; //clear pass 2 also
    }
  }
