import { Component } from '@angular/core';
import { UcfirstPipe } from '../../../pipes/ucfirst.pipe';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [UcfirstPipe, DatePipe],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css',
})
export class HomePageComponent {
  today: number = Date.now();
}
