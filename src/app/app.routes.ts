import { Routes } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { AddPetPageComponent } from './add-pet-page/add-pet-page.component';
import { EditPetPageComponent } from './edit-pet-page/edit-pet-page.component';
import { PetsPageComponent } from './pets-page/pets-page.component';

export const routes: Routes = [
    {
        path: '',
        component: MainPageComponent,
    },
    {
        path: 'about',
        component: AboutPageComponent,
    },
    {
        path: 'add-pet',
        component: AddPetPageComponent,
    },
    {
        path: 'edit-pet/:id',
        component: EditPetPageComponent,
    },
    {
        path: 'pets',
        component: PetsPageComponent,
    },
];
