import {Component, OnInit} from '@angular/core';
import {SidebarComponent} from "../sidebar/sidebar.component";
import {UserService} from "../service/user.service";
import {User} from "./User";

@Component({
  selector: 'app-allusers',
  standalone: true,
  imports: [
    SidebarComponent
  ],
  templateUrl: './allusers.component.html',
  styleUrl: './allusers.component.css'
})
export class AllusersComponent implements OnInit {

  users: User[] = [];

  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
    this.userService.getUsers().subscribe(users => {
      this.users = users;
    });
  }

}
