import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private users : User [] = [];

  constructor() {}

  public addUser(theUser:User){
    this.users.push(theUser); //saves the user on the array
  }

  public getAllUsers(){
    return this.users; //send the array back
  }
}
