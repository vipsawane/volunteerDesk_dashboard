import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RessourceService } from '../../../services/ressource/ressource.service';
import { Ressource } from '../../../models/ressource';
import Swal from 'sweetalert2';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ressource',
  standalone: true,
  imports: [
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    ReactiveFormsModule,
    CommonModule,
  ],
  templateUrl: './ressource.component.html',
  styleUrls: ['./ressource.component.scss']
})
export class RessourceComponent implements OnInit {
  ressourceList: Ressource[] = [];
  ressourceForm!: FormGroup;
  edit = false;
  currentId: number | null = null;
  @ViewChild('content') content: any; // Référence au modal pour ouverture

  constructor(
    private ressourceService: RessourceService,
    private fb: FormBuilder,
    private modalService: NgbModal,
  ) {}

  ngOnInit(): void {
    this.loadRessources();
    this.initForm();
  }

  loadRessources(): void {
    this.ressourceService.getAllRessource().subscribe((ressources: Ressource[]) => {
      this.ressourceList = ressources;
    });
  }

  initForm(): void {
    this.ressourceForm = this.fb.group({
      libelleRessource: ['', Validators.required],
      contenuRessource: ['', Validators.required],
    });
  }

  showForm(): void {
    this.edit = false;
    this.ressourceForm.reset();
    this.modalService.open(this.content, { ariaLabelledBy: 'modal-basic-title' });
  }

  hideForm(): void {
    this.modalService.dismissAll();
    this.ressourceForm.reset();
  }

  Edite(R: Ressource): void {
    this.edit = true;
    this.currentId = R.idRessource;
    this.ressourceForm.patchValue({
      libelleRessource: R.libelleRessource,
      contenuRessource: R.contenuRessource,
    });
    this.modalService.open(this.content, { ariaLabelledBy: 'modal-basic-title' });
  }

  onSubmit(): void {
    if (this.ressourceForm.valid) {
      if (this.edit && this.currentId !== null) {
        this.onUpdateRessource(this.currentId);
      } else {
        const nouvelleRessource: Ressource = this.ressourceForm.value;
        this.ressourceService.createRessource(nouvelleRessource).subscribe(() => {
          this.loadRessources();
          this.hideForm();
        });
      }
    }
  }

  onUpdateRessource(idRessource: number): void {
    Swal.fire({
      title: "Êtes-vous sûr ?",
      text: "Voulez-vous vraiment modifier cette ressource ?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Oui, modifiez-la !"
    }).then((result: any) => {
      if (result.isConfirmed) {
        const updatedRessource: Ressource = this.ressourceForm.value;
        this.ressourceService.updateRessource(updatedRessource, idRessource).subscribe(() => {
          Swal.fire("Modifié !", "La ressource a été modifiée avec succès.", "success");
          this.loadRessources();
          this.hideForm();
        });
      }
    });
  }
  
  onDeleteRessource(id: number): void {
    Swal.fire({
      title: "Êtes-vous sûr ?",
      text: "Cette action est irréversible !",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Oui, supprimez-la !"
    }).then((result: any) => {
      if (result.isConfirmed) {
        this.ressourceService.deleteRessource(id).subscribe(() => {
          Swal.fire("Supprimé !", "La ressource a été supprimée avec succès.", "success");
          this.loadRessources();
        });
      }
    });
  }
}
