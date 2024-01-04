import { Injectable } from '@angular/core';
import { EmployeModel } from '../models/employe-model.model';

@Injectable({
  providedIn: 'root',

  // théoriquement dès l'instanciation, notre code
  // envoie une requête aynchrone vers une API afin de récup une liste d'employés
  // l'une des librairies les plus utilisées dans le monde frontend
  // pour effecturer ces appels est AXIOS
})
export class EmployeService {
  private employeList!: any;

  constructor() {
    let response = [
      {
        nom: 'Serrano',
        prenom: 'Paul',
        fonction: 'Manager',
      },
      {
        nom: 'Williams',
        prenom: 'Alice',
        fonction: 'Secretaire',
      },
      {
        nom: 'Pignon',
        prenom: 'François',
        fonction: 'Commercial',
      },
    ];

    this.employeList = [];

    response.map((el) => {
      this.employeList.push(el);
    });

    console.log(this.employeList);
  }

  // créer 2 méthodes:
  // getEmployeList() qui retourne le tableau EmployeList
  // getEmployeByFunction() qui retourne les employe qui occuppent une certaine fonction

  getEmployeList(): EmployeModel[] {
    return this.employeList;
  }

  getEmployeByFunciton(fonction: string) {
    let temp: EmployeModel[] = this.employeList.filter((el: any) => {
      el.fonction === fonction;
    });
  }
}
