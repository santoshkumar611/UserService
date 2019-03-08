import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users/users.service';
import { User } from '../models/user';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  users;
  user:User;
  constructor(private usersService: UsersService) { }

  ngOnInit() {
    this.usersService.all().subscribe(res => {
      this.users = res;
    });
  }
  all(){
    this.usersService.all().subscribe(res => {
      this.users = res;
    });
  }
  createNewUser() {
    this.usersService.addNewUser(this.user).subscribe(res=>{
      this.all();
    });
    this.user = null;
  }

  removeQuote(index: number) {
    this.usersService.removeUser(index).subscribe(res=>{
      this.all();
    });
  }
}
