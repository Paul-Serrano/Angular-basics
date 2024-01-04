import { Component, OnInit } from '@angular/core';
import { EmployeService } from '../../services/employe-service.service';
import { EmployeModel } from '../../models/employe-model.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-composant-avec-service',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './composant-avec-service.component.html',
  styleUrl: './composant-avec-service.component.css',
})
export class ComposantAvecServiceComponent implements OnInit {
  public listEmployes!: EmployeModel[];
  constructor(private readonly employeService: EmployeService) {}

  ngOnInit(): void {
    this.listEmployes = this.employeService.getEmployeList();
    console.log('liste des employés :');
    console.log(this.listEmployes);
  }
}
