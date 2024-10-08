import { EvenementService } from './../../../services/evenement/evenement.service';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Evenement } from '../../../models/evenement';

import { CommonModule } from '@angular/common';  // Import nécessaire pour *ngIf et *ngFor
import { ReactiveFormsModule } from '@angular/forms';  // Import pour les formulaires réactifs
import { MatFormFieldModule } from '@angular/material/form-field';  // Import pour mat-form-field
import { MatInputModule } from '@angular/material/input';  // Import pour matInput
import { MatButtonModule } from '@angular/material/button';  // Pour mat-raised-button


@Component({
  selector: 'app-evenement-form',
  templateUrl: './evenement-form.component.html',
  styleUrls: ['./evenement-form.component.scss'],
  imports: [
    CommonModule,  // Pour *ngIf, *ngFor, etc.
    ReactiveFormsModule,  // Pour les formulaires réactifs et formGroup
    MatFormFieldModule,  // Pour mat-form-field
    MatInputModule,  // Pour matInput
    MatButtonModule  // Pour mat-raised-button
  ],
  standalone: true
})
export class EvenementFormComponent {
  form: FormGroup;
  submittedData: any;
  photoFile: File | null = null;

  constructor(private fb: FormBuilder, private EvenementService: EvenementService) {
    // Initialisation du formulaire avec les champs requis
    this.form = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      nbrPoste: ['', Validators.required],
      typeEvenement: ['', Validators.required],
      lieuEvenement: ['', Validators.required],
      dateDebut: ['', Validators.required],
      dateFin: ['', Validators.required],
      organisateur: ['', Validators.required],
      photo: [null]
    });
  }

  // Fonction appelée lors de la soumission du formulaire
  onSubmit() {
    if (this.form.valid) {
      const evenement: Evenement = this.form.value;

      if (this.photoFile) {
        this.EvenementService.createUSer(evenement, this.photoFile).subscribe(
          (response: any) => {
            this.submittedData = response;
            console.log('Événement créé avec succès:', response);
          },
          (error: any) => {
            console.error('Erreur lors de la création de l\'événement:', error);
          }
        );
      }
    }
  }

  // Fonction pour gérer la sélection de fichier photo
  onFileChange(event: any) {
    if (event.target.files && event.target.files.length > 0) {
      this.photoFile = event.target.files[0];
    }
  }
}
