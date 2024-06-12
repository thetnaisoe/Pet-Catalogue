import { Component } from '@angular/core';
import { Pet } from '../pet';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-pets-page',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './pets-page.component.html',
  styleUrl: './pets-page.component.css'
})
export class PetsPageComponent {
  pets: Pet[] = [
    {
      id: 1,
      name: 'Fluffy',
      species: 'Cat',
      dateOfBirth: new Date(2010, 5, 1),
      dateOfDeath: undefined,
      note: 'Fluffy is a very fluffy cat.',
    },
    {
      id: 2,
      name: 'Fido',
      species: 'Dog',
      dateOfBirth: new Date(2015, 2, 1),
      dateOfDeath: undefined,
      note: 'Fido is a very friendly dog.',
    },

  ];
  formatDate(date: Date | undefined): string {
    if (!date) return '';
    const year = date.getFullYear();
    const month = ('0' + (date.getMonth() + 1)).slice(-2); // Months are 0-based in JavaScript
    const day = ('0' + date.getDate()).slice(-2);
    return `${year}.${month}.${day}`;
  }
}
