import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';  // Import nécessaire pour *ngIf et *ngFor
import { ReactiveFormsModule } from '@angular/forms';  // Import pour les formulaires réactifs
import { MatFormFieldModule } from '@angular/material/form-field';  // Import pour mat-form-field
import { MatInputModule } from '@angular/material/input';  // Import pour matInput
import { MatButtonModule } from '@angular/material/button';  // Pour mat-raised-button
import { OrganisationService } from '../../../../services/organisation/organisation.service';

@Component({
  selector: 'app-organisation-form',
  standalone: true,
  templateUrl: './organisation-form.component.html',
  styleUrls: ['./organisation-form.component.scss'],
  imports: [
    CommonModule,  // Pour *ngIf, *ngFor, etc.
    ReactiveFormsModule,  // Pour les formulaires réactifs et formGroup
    MatFormFieldModule,  // Pour mat-form-field
    MatInputModule,  // Pour matInput
    MatButtonModule  // Pour mat-raised-button
  ]
})
export class OrganisationFormComponent {
  organisationForm: FormGroup;
  logoFile: File | null = null;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private organisationService: OrganisationService
  ) {
    // Initialisation du formulaire
    this.organisationForm = this.formBuilder.group({
      numeroIdentification: ['', Validators.required],
      motDePasse: ['', [Validators.required, Validators.minLength(8)]],
      raisonSocial: ['', Validators.required],
      description: [''],
      emailOrganisation: ['', [Validators.required, Validators.email]],
      contact: ['', Validators.required],
      adresse: ['', Validators.required],
      siege: ['', Validators.required],
      domaineActivite: [''],
      logo: [null]
    });
  }

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      this.logoFile = file;
    }
  }

  onSubmit() {
    if (this.organisationForm.valid) {
      const organisationData = this.organisationForm.value;

      // Appel du service pour créer une organisation
      if (this.logoFile) {
        this.organisationService.createOrganisation(organisationData, this.logoFile)
          .subscribe({
            next: (response: any) => {
              console.log('Organisation créée avec succès', response);
              this.submitted = true;
            },
            error: (error: any) => {
              console.error('Erreur lors de la création de l\'organisation', error);
            }
          });
      }
    }
  }
}
