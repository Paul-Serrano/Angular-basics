import { Component } from '@angular/core';
import { UcfirstPipe } from '../../../pipes/ucfirst.pipe';
import { DatePipe } from '@angular/common';
import { MyFirstComponentComponent } from '../../../components/my-first-component/my-first-component.component';
import { ParentComponentComponent } from '../../../components/parent-component/parent-component.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    UcfirstPipe,
    DatePipe,
    MyFirstComponentComponent,
    ParentComponentComponent,
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css',
})
export class HomePageComponent {
  today: number = Date.now();
}
