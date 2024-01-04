import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child-component',
  standalone: true,
  imports: [],
  templateUrl: './child-component.component.html',
  styleUrl: './child-component.component.css',
})
export class ChildComponentComponent implements OnInit {
  @Input() parentData!: any;
  @Output() backEvent: EventEmitter<string> = new EventEmitter<string>();

  ngOnInit(): void {
    console.log(this.parentData);
  }

  passElement(element: string) {
    this.backEvent.emit(element);
  }
}
