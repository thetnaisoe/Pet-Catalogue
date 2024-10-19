import { Component, OnInit } from '@angular/core';
import { Pet } from '../pet';
import { RouterLink } from '@angular/router';
import { PetService } from '../pet.service';
import { JsonPipe } from '@angular/common';
import { AddPetPageComponent } from '../add-pet-page/add-pet-page.component';
import { EditPetPageComponent } from '../edit-pet-page/edit-pet-page.component';


@Component({
  selector: 'app-pets-page',
  standalone: true,
  imports: [RouterLink, JsonPipe, AddPetPageComponent, EditPetPageComponent],
  templateUrl: './pets-page.component.html',
  styleUrl: './pets-page.component.css'
})
export class PetsPageComponent implements OnInit{
  pets: Pet[] = [];
  selectedPet: Pet | null = null;

  constructor(private petService: PetService) {}

  async ngOnInit() {
    this.pets = await this.petService.getPets();
  }

  handleSave(pet: Pet) {
    // console.log(issue);
    if (this.selectedPet) {
      Object.assign(this.selectedPet, pet);
    }
    this.selectedPet = null;
  }

  formatDate(date: Date | string): string {
    if (!(date instanceof Date)) {
      date = new Date(date);
    }
  
    if (isNaN(date.getTime())) {
      // date is not a valid Date object
      return '';
    }
  
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
  
    return `${year}-${month < 10 ? '0' + month : month}-${day < 10 ? '0' + day : day}`;
  }
}
