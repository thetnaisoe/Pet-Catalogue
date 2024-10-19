import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { Pet } from '../pet';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { JsonPipe, NgIf } from '@angular/common';

@Component({
  selector: 'app-pet-form',
  standalone: true,
  imports: [ReactiveFormsModule, JsonPipe],
  templateUrl: './pet-form.component.html',
  styleUrl: './pet-form.component.css',
})
export class PetFormComponent implements OnChanges {
  @Input() pet = new Pet();
  @Output() save = new EventEmitter<Pet>();

  petForm = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    species: ['', [Validators.required, Validators.minLength(2)]],
    dateOfBirth: ['', Validators.required],
    dateOfDeath: [''],
    note: ['', Validators.maxLength(200)],
  });

  constructor(private fb: FormBuilder) {}

  ngOnChanges(): void {
    let dateOfBirth = this.pet.dateOfBirth;
    let dateOfDeath = this.pet.dateOfDeath;
  
    if (dateOfBirth && !(dateOfBirth instanceof Date)) {
      dateOfBirth = new Date(dateOfBirth);
    }
  
    if (dateOfDeath && !(dateOfDeath instanceof Date)) {
      dateOfDeath = new Date(dateOfDeath);
    }
  
    this.petForm.patchValue({
      ...this.pet,
      dateOfBirth: dateOfBirth instanceof Date && !isNaN(dateOfBirth.getTime()) ? dateOfBirth.toISOString().split('T')[0] : '',
      dateOfDeath: dateOfDeath instanceof Date && !isNaN(dateOfDeath.getTime()) ? dateOfDeath.toISOString().split('T')[0] : '',
    });
  }

  get name() {
    return this.petForm.get('name');
  }
  get species() {
    return this.petForm.get('species');
  }

  get dateOfBirth() {
    return this.petForm.get('dateOfBirth');
  }

  get dateOfDeath() {
    return this.petForm.get('dateOfDeath');
  }

  get note() {
    return this.petForm.get('note');
  }

  handleSubmit() {
    const formValue = this.petForm.value;
    const pet: Pet = {
      id: this.pet.id || 0, // Use the existing pet id or default to 0
      ...formValue,
      dateOfBirth: formValue.dateOfBirth ? new Date(formValue.dateOfBirth) : undefined,
      dateOfDeath: formValue.dateOfDeath ? new Date(formValue.dateOfDeath) : undefined,
      name: formValue.name ?? '', // Provide a default value of an empty string for the 'name' property
      species: formValue.species ?? '', // Provide a default value of an empty string for the 'species' property
      note: formValue.note ?? '', // Provide a default value of an empty string for the 'note' property
    };
    this.save.emit(pet);
  }
}