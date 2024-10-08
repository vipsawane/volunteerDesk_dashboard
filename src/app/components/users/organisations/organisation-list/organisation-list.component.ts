import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Organisation } from '../../../../models/organisation';
import { OrganisationService } from '../../../../services/organisation/organisation.service';
import { CommonModule } from '@angular/common';  // Import nécessaire pour *ngIf et *ngFor
import { ReactiveFormsModule } from '@angular/forms';  // Import pour les formulaires réactifs
import { MatFormFieldModule } from '@angular/material/form-field';  // Import pour mat-form-field
import { MatInputModule } from '@angular/material/input';  // Import pour matInput
import { MatButtonModule } from '@angular/material/button';  // Pour mat-raised-button


import { MatTableModule } from '@angular/material/table'; // Ajoutez ceci
import { MatPaginatorModule } from '@angular/material/paginator'; // Ajoutez ceci
import { MatSortModule } from '@angular/material/sort'; // Ajoutez ceci


@Component({
  selector: 'app-organisation-list',
  standalone: true,
  templateUrl: './organisation-list.component.html',
  styleUrls: ['./organisation-list.component.scss'],
  imports: [
    CommonModule,  // Pour *ngIf, *ngFor, etc.
    ReactiveFormsModule,  // Pour les formulaires réactifs et formGroup
    MatFormFieldModule,  // Pour mat-form-field
    MatInputModule,  // Pour matInput
    MatButtonModule , // Pour mat-raised-button
    
    MatTableModule,       // Ajoutez ce module
    MatPaginatorModule,   // Ajoutez ce module
    MatSortModule 


    
  ]
})
export class OrganisationListComponent implements AfterViewInit {
  displayedColumns: string[] = ['idOrganisation', 'raisonSocial', 'typeOrganisation', 'emailOrganisation', 'domaineActivite'];
  dataSource = new MatTableDataSource<Organisation>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private organisationService: OrganisationService) {}

  ngOnInit() {
    this.organisationService.getAll().subscribe(data => {
      this.dataSource.data = data;
    });
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
