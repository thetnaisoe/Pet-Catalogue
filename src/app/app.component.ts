import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';  
import { MainPageComponent } from './main-page/main-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { AddPetPageComponent } from './add-pet-page/add-pet-page.component';
import { EditPetPageComponent } from './edit-pet-page/edit-pet-page.component';
import { PetsPageComponent } from './pets-page/pets-page.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, MainPageComponent, AboutPageComponent, AddPetPageComponent, EditPetPageComponent, PetsPageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'pet-catalogue';
}
