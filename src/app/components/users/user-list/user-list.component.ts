import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { CommonModule } from '@angular/common';  // Import nécessaire pour *ngIf et *ngFor
import { ReactiveFormsModule } from '@angular/forms';  // Import pour les formulaires réactifs
import { MatFormFieldModule } from '@angular/material/form-field';  // Import pour mat-form-field
import { MatInputModule } from '@angular/material/input';  // Import pour matInput
import { MatButtonModule } from '@angular/material/button'; 
import { BrowserModule } from '@angular/platform-browser';
import { MatTableModule } from '@angular/material/table'; // Import du module de table
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator'; // Import du module de pagination
import { MatSort, MatSortModule } from '@angular/material/sort'; // Import du module de tri
import { User } from '../../../models/user';
import { UserService } from '../../../services/user/user.service';


@Component({
  selector: 'app-user-list',
  standalone: true,
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
  imports: [
    CommonModule,  // Pour *ngIf, *ngFor, etc.
    ReactiveFormsModule,  // Pour les formulaires réactifs et formGroup
    MatFormFieldModule,  // Pour mat-form-field
    MatInputModule,  // Pour matInput
    MatButtonModule , 
    BrowserModule,
    MatPaginator,
    MatTableModule, MatPaginatorModule, MatSortModule
  ]
})
export class UserListComponent implements AfterViewInit {

  displayedColumns: string[] = ['idUser', 'nomUser', 'prenomUser', 'email', 'telephone', 'role', 'competences'];
  dataSource: MatTableDataSource<User>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private userService: UserService) {
    // Initialisation de la data source
    this.dataSource = new MatTableDataSource();
  }

  ngOnInit() {
    // Chargement des utilisateurs depuis l'API
    this.userService.getAll().subscribe({
      next: (users: User[]) => {
        this.dataSource.data = users;  // Assignation des données récupérées
      },
      error: (error: any) => {
        console.error('Erreur lors de la récupération des utilisateurs', error);
      }
    });
  }

  ngAfterViewInit() {
    // Configuration du paginator et du tri après que la vue est initialisée
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  // Appliquer un filtre sur la table
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
