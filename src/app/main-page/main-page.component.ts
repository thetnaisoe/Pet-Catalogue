import { Component } from '@angular/core';
import { PetService } from '../pet.service';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css'
})

export class MainPageComponent implements OnInit {
  alivePets: number = 0;
  deadPets: number = 0;

  constructor(private petService: PetService) { } // Inject PetService

  ngOnInit(): void {
    this.petService.getPets().then(pets => {
      this.alivePets = pets.filter(pet => pet.dateOfDeath === null).length;
      this.deadPets = pets.filter(pet => pet.dateOfDeath !== null).length;
    });
  }
}
