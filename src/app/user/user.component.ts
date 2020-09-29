import { Component, OnInit } from '@angular/core';
import {User} from "../models/user";
import {UserService} from "../services/user.service";
import {Router} from "@angular/router";


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  userList: User[] = [];
  user: User = new User();

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
    this.getAllUsers();
  }

  getAllUsers() {
    this.userService.getAllUsers().subscribe(
      res => { this.userList = res["data"]
                    console.log(res)},
      error => console.log(error)
    );
  }
  saveUser() {
    this.userService.createUser(this.user)
      .subscribe(
        createdUser => {
          this.userList.push(createdUser)
          console.log(createdUser)},
        error => console.log(error))
  }

}

