import { Injectable } from '@angular/core';
import { Pet } from './pet';
import { HttpClient } from '@angular/common/http';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PetService {
  // private pets: Pet[] = [
  //   {
  //       id: 1,
  //       name: 'Fluffy',
  //       species: 'Cat',
  //       dateOfBirth: new Date(2010, 5, 1),
  //       dateOfDeath: undefined,
  //       note: 'Fluffy is a very fluffy cat.',
  //     },
  //     {
  //       id: 2,
  //       name: 'Fido',
  //       species: 'Dog',
  //       dateOfBirth: new Date(2015, 2, 1),
  //       dateOfDeath: undefined,
  //       note: 'Fido is a very friendly dog.',
  //     },
  //];
  constructor(
     private http: HttpClient
  ) {}

  petUrl = 'http://127.0.0.1:8000/api/pets';

  getPets() {
    return lastValueFrom(this.http.get<Pet[]>(this.petUrl));
  }
  getPetById(id: number) {
    //return lastValueFrom(this.pets.find((pet) => pet.id === id));
    return lastValueFrom(this.http.get<Pet>(`${this.petUrl}/${id}`));
  }
  addPet(pet: Pet) {
    // pet.id = this.pets.length + 1;
    // this.pets.push(pet);
    return lastValueFrom(this.http.post<Pet>(this.petUrl, pet));
  }
  modifyPet(id: number, pet: Pet) {
    // pet.id = id;
    // const _pet = this.getPetById(id);
    // if (_pet) {
    //   Object.assign(_pet, pet);
    // }
    return lastValueFrom(this.http.patch<Pet>(`${this.petUrl}/${id}`, pet));
  }
}
