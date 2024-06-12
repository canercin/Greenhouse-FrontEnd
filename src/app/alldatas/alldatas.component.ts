import { Component } from '@angular/core';
import {SidebarComponent} from "../sidebar/sidebar.component";

@Component({
  selector: 'app-alldatas',
  standalone: true,
    imports: [
        SidebarComponent
    ],
  templateUrl: './alldatas.component.html',
  styleUrl: './alldatas.component.css'
})
export class AlldatasComponent {

}
