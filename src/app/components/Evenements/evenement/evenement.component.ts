import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { EvenementService } from '../../../services/evenement/evenement.service';
import { Evenement } from '../../../models/evenement';
import Swal from 'sweetalert2';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-evenement',
  standalone: true,
  imports: [
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    ReactiveFormsModule,
    CommonModule,
  ],
  templateUrl: './evenement.component.html',
  styleUrls: ['./evenement.component.scss'],
})
export class EvenementComponent implements OnInit {
  evenementList: Evenement[] = [];
  evenementForm!: FormGroup;
  isFormVisible = false;
  edit = false;
  currentId: number | null = null;

  constructor(
    private fb: FormBuilder,
    private evenementService: EvenementService
  ) {}

  ngOnInit(): void {
    this.loadEvenements();
    this.initForm();
  }

  loadEvenements(): void {
    this.evenementService.getAllEvenement().subscribe((evenements: Evenement[]) => {
      this.evenementList = evenements;
    });
  }

  initForm(): void {
    this.evenementForm = this.fb.group({
      libelle: ['', Validators.required],
      description: [''],
      typeEvenement: ['Activite', Validators.required],
      lieuEvenement: ['', Validators.required],
      organisateur: ['', Validators.required],
      dateDebutEvenement: ['', Validators.required],
      dateFinEvenement: ['', Validators.required],
      nbrPoste: [0, [Validators.required, Validators.min(1)]],
    });
  }

  showForm(): void {
    this.edit = false;
    this.evenementForm.reset();
    this.isFormVisible = true;
  }

  hideForm(): void {
    this.isFormVisible = false;
    this.evenementForm.reset();
  }

  editEvent(event: Evenement): void {
    this.edit = true;
    this.currentId = event.idEvenement;
    this.evenementForm.patchValue(event);
    this.isFormVisible = true;
  }

  onSubmit(): void {
    if (this.evenementForm.valid) {
      const evenementData: Evenement = this.evenementForm.value;
      if (this.edit && this.currentId !== null) {
        this.onUpdateEvent(this.currentId, evenementData);
      } else {
        this.evenementService.createEvenement(evenementData).subscribe(() => {
          this.loadEvenements();
          this.hideForm();
        });
      }
    }
  }

  onUpdateEvent(id: number, eventData: Evenement): void {
    Swal.fire({
      title: 'Confirmer la modification',
      text: 'Êtes-vous sûr de vouloir modifier cet événement ?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Oui, modifier',
      cancelButtonText: 'Annuler'
    }).then((result) => {
      if (result.isConfirmed) {
        this.evenementService.updateEvenement(eventData, id).subscribe(() => {
          Swal.fire('Modifié!', 'L\'événement a été modifié avec succès.', 'success');
          this.loadEvenements();
          this.hideForm();
        });
      }
    });
  }

  onDeleteEvent(id: number): void {
    Swal.fire({
      title: 'Confirmer la suppression',
      text: 'Cette action est irréversible!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Oui, supprimer',
      cancelButtonText: 'Annuler'
    }).then((result) => {
      if (result.isConfirmed) {
        this.evenementService.deleteEvenement(id).subscribe(() => {
          Swal.fire('Supprimé!', 'L\'événement a été supprimé avec succès.', 'success');
          this.loadEvenements();
        });
      }
    });
  }
}
