import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-internal-component',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './internal-component.component.html',
  styleUrl: './internal-component.component.css',
})
export class InternalComponentComponent implements OnInit {
  public text!: string;
  public text2!: string;

  ngOnInit(): void {
    this.text = 'this is a nice text created inside the working hook';

    this.text2 = 'Change me !';
  }
}
