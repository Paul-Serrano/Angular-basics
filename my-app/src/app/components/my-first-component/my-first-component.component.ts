import { Component, OnInit } from '@angular/core';
import { InternalComponentComponent } from '../internal-component/internal-component.component';

@Component({
  selector: 'app-my-first-component',
  standalone: true,
  imports: [InternalComponentComponent],
  templateUrl: './my-first-component.component.html',
  styleUrl: './my-first-component.component.css',
})
export class MyFirstComponentComponent implements OnInit {
  ngOnInit(): void {
    console.log(this);
  }
}
