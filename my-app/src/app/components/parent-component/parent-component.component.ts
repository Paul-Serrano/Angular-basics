import { Component, OnInit } from '@angular/core';
import { ChildComponentComponent } from '../child-component/child-component.component';

@Component({
  selector: 'app-parent-component',
  standalone: true,
  imports: [ChildComponentComponent],
  templateUrl: './parent-component.component.html',
  styleUrl: './parent-component.component.css',
})
export class ParentComponentComponent implements OnInit {
  public data!: any;
  public clickedData!: any;

  ngOnInit(): void {
    this.data = {
      nom: 'Serrano',
      prenom: 'Paul',
      age: 31,
      fonction: 'Développeur',
    };
  }

  getElement(ev: string) {
    this.clickedData = ev;
  }
}
