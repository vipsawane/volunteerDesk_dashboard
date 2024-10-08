import { UserService } from './../../../services/user/user.service';
import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { User } from '../../../models/user';

import { ReactiveFormsModule } from '@angular/forms'; // Ajoutez cette ligne

@Component({
  selector: 'app-user-form',
  standalone: true,
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss'],
  imports: [
    CommonModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    ReactiveFormsModule
  ]
})
export class UserFormComponent {
  userForm: FormGroup;
  submitted = false;
  photoUser: File | null = null;
  photoCarteIdentite: File | null = null;

  
  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService
  ) {
    // Initialisation du formulaire d'utilisateur avec toutes les propriétés du modèle User
    this.userForm = this.formBuilder.group({
      nomUser: ['', Validators.required],
      prenomUser: ['', Validators.required],
      description: [''],
      motDePasse: ['', [Validators.required, Validators.minLength(8)]],
      email: ['', [Validators.required, Validators.email]],
      telephone: ['', Validators.required],
      dateNaissance: ['', Validators.required],
      numCarteIdentite: ['', Validators.required],
      competences: [''],
      anneeExperience: [0, Validators.min(0)],
      role: ['', Validators.required],
      photoUser: [null],
      photoCarteIdentite: [null]
    });
  }

  // Gestion de la sélection de fichiers (photoUser et photoCarteIdentite)
  onFileSelected(event: any, type: 'photoUser' | 'photoCarteIdentite') {
    const file: File = event.target.files[0];
    if (file) {
      if (type === 'photoUser') {
        this.photoUser = file;
      } else if (type === 'photoCarteIdentite') {
        this.photoCarteIdentite = file;
      }
    }
  }

  // Soumission du formulaire
  onSubmit() {
    if (this.userForm.valid) {
      const userData: User = this.userForm.value;  // Récupère les données du formulaire

      // Appel du service pour ajouter un utilisateur avec photo et carte d'identité
      this.userService.createUser(userData, this.photoUser!, this.photoCarteIdentite!)
        .subscribe({
          next: (response: any) => {
            console.log('Utilisateur créé avec succès', response);
            this.submitted = true;
          },
          error: (error: any) => {
            console.error('Erreur lors de la création de l\'utilisateur', error);
          }
        });
    }
  }
}
