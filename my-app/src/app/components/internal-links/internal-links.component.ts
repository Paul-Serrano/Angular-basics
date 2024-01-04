import { Component } from '@angular/core';
import { TopnavComponent } from '../topnav/topnav.component';

@Component({
  selector: 'app-internal-links',
  standalone: true,
  imports: [TopnavComponent],
  templateUrl: './internal-links.component.html',
  styleUrl: './internal-links.component.css',
})
export class InternalLinksComponent {}
