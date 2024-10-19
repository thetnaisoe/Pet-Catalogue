
# PetCatalogue Frontend (Angular)

This is the frontend of the PetCatalogue application, built with Angular. It allows users to interact with the PetCatalogue API to view, add, edit, and delete pets from the catalogue.

## Features

- A clean, user-friendly interface to manage pets.
- **Routing** for navigation between pages (Main page, Pets, Add/Edit Pet, About).
- Integration with the **PetCatalogue API** for CRUD operations.
- **Navigation bar** for easy access to different pages (Main, Pets, About).
- Dynamic content on the main page showing the number of living and deceased pets.

## Requirements

- **Node.js >= 12.x**
- **npm >= 6.x**
- **Angular CLI >= 12.x**

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/pet-catalogue.git
cd pet-catalogue/client
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Set Up the Environment

- Create an environment file `src/environments/environment.ts` with the API URL:

```typescript
export const environment = {
  production: false,
  apiUrl: 'http://localhost:8000/api'
};
```

### 4. Run the Application

You can start the Angular development server by running:

```bash
ng serve
```

The frontend will be available at [http://localhost:4200](http://localhost:4200).

### Project Structure

- **Main page**: Displays a welcome message along with dynamic content showing the number of pets.
- **Pets page**: Lists all the pets, with options to add, edit, or delete pets.
- **Add/Edit Pet page**: A form to add or edit a pet’s details.
- **About page**: Displays information about the developer (your name, Neptun ID, email).

### Routing

The application has the following routes:
- `/` - Main page
- `/pets` - List of pets
- `/pets/add` - Add new pet
- `/pets/edit/:id` - Edit existing pet
- `/about` - About page

### Build the Project for Production

To build the project for production, run:

```bash
ng build --prod
```

This will generate the compiled files in the `dist/` folder.

## License

This project is licensed under the MIT License.
