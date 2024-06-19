import { Component } from '@angular/core';
import {AlertifyService} from "../service/alertify.service";

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  constructor(private alertify: AlertifyService){
  }

  register() {
    this.alertify.success('Registration successful');
  }
}
