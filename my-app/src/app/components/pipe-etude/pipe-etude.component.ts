import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { UcfirstPipe } from '../../pipes/ucfirst.pipe';

@Component({
  selector: 'app-pipe-etude',
  standalone: true,
  imports: [CommonModule, UcfirstPipe],
  templateUrl: './pipe-etude.component.html',
  styleUrl: './pipe-etude.component.css',
})
export class PipeEtudeComponent implements OnInit {
  public aDate!: Date;
  public someObject!: any;

  ngOnInit(): void {
    this.aDate = new Date();
    this.someObject = {
      prop1: 'value1',
      prop2: {
        p1: 'v1',
        ps: 'v2',
      },
    };
  }
}
