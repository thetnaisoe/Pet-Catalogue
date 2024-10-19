import { Component, OnInit } from '@angular/core';
import { PetFormComponent } from '../pet-form/pet-form.component';
import { PetService } from '../pet.service';
import { Pet } from '../pet';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-new-pet',
  standalone: true,
  imports: [PetFormComponent],
  templateUrl: './add-pet-page.component.html',
  styleUrl: './add-pet-page.component.css',
})
export class AddPetPageComponent implements OnInit {
  pet: Pet = new Pet();

  constructor(
    private petService: PetService,
    private router: Router,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  async ngOnInit(){
    const paramId = this.route.snapshot.paramMap.get('id');
    if (paramId) {
      const id = parseInt(paramId);
      const pet = await this.petService.getPetById(id);
      if (pet) {
        this.pet = pet;
      }
    }
  }

  async handleSave(pet: Pet) {
    if (this.pet.id) {
      await this.petService.modifyPet(this.pet.id, pet);
      this.location.back();
    } else {
      await this.petService.addPet(pet);
      this.router.navigate(['/pets']);
    }
  }
}

