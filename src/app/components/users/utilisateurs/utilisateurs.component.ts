// import { MatTableDataSource } from "@angular/material/table";
// import { User } from "../../sidebar/sidebar.component";
// import { AfterViewInit, Component, OnInit, ViewChild } from "@angular/core";
// import { Organisation } from "../../../models/organisation";
// import { MatPaginator } from "@angular/material/paginator";
// import { MatSort } from "@angular/material/sort";
// import { UserService } from "../../../services/user/user.service";
// import { OrganisationService } from "../../../services/organisation/organisation.service";

// @Component({
//   selector: 'app-utilisateurs',
//   standalone: true,
//   templateUrl: './utilisateurs.component.html',
//   styleUrls: ['./utilisateurs.component.scss'],
// })
// export class UtilisateurComponent implements OnInit, AfterViewInit {
//   dataSource!: MatTableDataSource<User | Organisation>;
//   displayedColumnsUser: string[] = ['idUser', 'nomUser', 'prenomUser', 'email', 'role'];
//   displayedColumnsOrganisation: string[] = ['idOrganisation', 'raisonSocial', 'typeOrganisation', 'emailOrganisation', 'domaineActivite'];
//   viewMode: 'user' | 'organisation' = 'user';

//   @ViewChild(MatPaginator) paginator!: MatPaginator;
//   @ViewChild(MatSort) sort!: MatSort;

//   constructor(private userService: UserService, private organisationService: OrganisationService) {}

//   ngOnInit(): void {
//     this.loadUsers();
//   }

//   ngAfterViewInit(): void {
//     if (this.dataSource) {
//       this.dataSource.paginator = this.paginator;
//       this.dataSource.sort = this.sort;
//       // Ajout de la méthode sortingDataAccessor
//       this.dataSource.sortingDataAccessor = (data, sortHeaderId) => {
//         if (this.viewMode === 'user' && (data as User)) {
//           const user = data as User;
//           switch (sortHeaderId) {
//             case 'nomUser': return user.id;
//             case 'nomUser': return user.typeUser;
//             case 'prenomUser': return user.prenomUser;
//             case 'email': return user.email;
//             case 'role': return user.role;
//             case 'competences': return user.competences;

//             default: return '';
//           }
//         } else if (this.viewMode === 'organisation' && (data as Organisation)) {
//           const org = data as Organisation;
//           switch (sortHeaderId) {
//             case 'raisonSocial': return org.raisonSocial;
//             case 'emailOrganisation': return org.emailOrganisation;
//             case 'domaineActivite': return org.domaineActivite;
//             case 'typeOrganisation': return org.typeOrganisation;
//             default: return '';
//           }
//         }
//         return ''; // Retourne une valeur par défaut si aucun champ n'est trouvé
//       };
//     }
//   }

//   loadUsers(): void {
//     this.userService.getAll().subscribe(data => {
//       this.dataSource = new MatTableDataSource<User | Organisation>(data);
//       this.dataSource.paginator = this.paginator;
//       this.dataSource.sort = this.sort;
//     });
//   }

//   loadOrganisations(): void {
//     this.organisationService.getAll().subscribe(data => {
//       this.dataSource = new MatTableDataSource<User | Organisation>(data);
//       this.dataSource.paginator = this.paginator;
//       this.dataSource.sort = this.sort;
//     });
//   }

//   applyFilter(event: Event) {
//     const filterValue = (event.target as HTMLInputElement).value;
//     this.dataSource.filter = filterValue.trim().toLowerCase();

//     if (this.dataSource.paginator) {
//       this.dataSource.paginator.firstPage();
//     }
//   }

//   onViewModeChange(event: MatButtonToggleChange): void {
//     this.viewMode = event.value;
//     if (this.viewMode === 'user') {
//       this.loadUsers();
//     } else {
//       this.loadOrganisations();
//     }
//   }
// }
