import { Component } from '@angular/core';
import {ChartsComponent} from "../charts/charts.component";
import { CommonModule } from '@angular/common'; // CommonModule'ü ekliyoruz

@Component({
  selector: 'app-chartsbox',
  standalone: true,
  imports: [
    ChartsComponent, CommonModule
  ],
  templateUrl: './chartsbox.component.html',
  styleUrl: './chartsbox.component.css'
})
export class ChartsboxComponent {
  seriesValues: number[] = [75, 50, 85];
}
