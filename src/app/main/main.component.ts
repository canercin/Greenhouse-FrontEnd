import { Component } from '@angular/core';
import {SidebarComponent} from "../sidebar/sidebar.component";
import {ChartsboxComponent} from "../chartsbox/chartsbox.component";

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    SidebarComponent,
    ChartsboxComponent
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {

}
