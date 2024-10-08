import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { Evenement } from '../../../models/evenement';
import { EvenementService } from './../../../services/evenement/evenement.service';


import { NgIf, NgFor } from '@angular/common';

@Component({
  selector: 'app-evenement',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    NgIf,
    NgFor
  ],
  templateUrl: './evenement.component.html',
  styleUrl: './evenement.component.scss'
})
export class EvenementComponent implements OnInit, AfterViewInit {
  dataSource!: MatTableDataSource<Evenement>;
  displayedColumns: string[] = ['id', 'libelleEvenement', 'lieuEvenement','organisateur', ];
  
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private evenementService: EvenementService) {}

  ngOnInit(): void {
    this.evenementService.getAll().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  ngAfterViewInit(): void {
    if (this.dataSource) {
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    }
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  searchByLibelleEvenement(libelleEvenement: string): void {
    this.evenementService.findByLibelleEvenement(libelleEvenement).subscribe(data => {
      this.dataSource.data = data;
    });
  }

  
  }



