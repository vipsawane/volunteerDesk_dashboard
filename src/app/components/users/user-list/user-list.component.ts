import { CommonModule } from '@angular/common';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { User } from '../../../models/user';
import { UserService } from '../../../services/user/user.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectChange, MatSelectModule } from '@angular/material/select';
import { MatNativeDateModule } from '@angular/material/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatNativeDateModule,
    FormsModule
  ],
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  @ViewChild('photoInput') photoInput!: ElementRef;

  
  userForm!: FormGroup;
  filterForm!: FormGroup;
  users: User[] = [];
  filteredUsers: User[] = [];
  currentPage: number = 1;
  itemsPerPage: number = 10;
  photoUser!: File;
  photoCarteIdentite!: File;
  isFormVisible: boolean = false;
  isFilterVisible: boolean = false; // Indicateur de visibilité du filtre
  user! : User;


  // Méthode pour changer de page
  changePage(page: number) {
    this.currentPage = page;
  }

  // Calculer le nombre total de pages
  get totalPages() {
    return Math.ceil(this.filteredUsers.length / this.itemsPerPage);
  }

  onFilterChange(event: MatSelectChange) {
    const selectedValue = event.value; // La valeur sélectionnée
    console.log('Valeur sélectionnée:', selectedValue);
    
    // Appliquez les filtres en utilisant la valeur sélectionnée si nécessaire
    this.applyFilters(this.filterForm.value);
  }

  constructor(
    private userService: UserService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.loadUsers();
    this.initForm();
  }

  // Méthode pour charger les utilisateurs
  loadUsers() {
    this.userService.getAllUser().subscribe(users => {
      this.users = users;
      this.filteredUsers = users; // Initialement, les utilisateurs filtrés sont tous les utilisateurs
    });
  }

  // Initialisation des formulaires
  initForm(): void {
    this.userForm = this.fb.group({
      nomUser: ['', Validators.required],
      prenomUser: ['', Validators.required],
      genre: ['', Validators.required],
      photoUser: [''],
      description: [''],
      email: ['', [Validators.required, Validators.email]],
      telephone: ['', Validators.required],
      dateNaissance: [''],
      numCarteIdentite: ['', Validators.required],
      motDePasse: ['', Validators.required],
      competences: ['', Validators.required]
    });

    this.filterForm = this.fb.group({
      nomUser: [''],
      prenomUser: [''],
      role: ['']
    });

    // Appliquez les filtres automatiquement lors des changements
    this.filterForm.valueChanges.subscribe(filters => {
      this.applyFilters(filters);
    });
  }

  createUser() {
     const u= this.userForm;
    //  this.user = u;
    // formData.append('nomUser', this.userForm.get('nomUser')?.value);
    // formData.append('prenomUser', this.userForm.get('prenomUser')?.value);
    // if (this.photoUser) {
    //   u.append('photoUser', this.photoUser);
    // }
    // if (this.photoCarteIdentite) {
    //   formData.append('photoCarteIdentite', this.photoCarteIdentite);
    // }
  
    this.userService.createUser(u,this.photoUser, this.photoCarteIdentite ).subscribe(response => {
      this.loadUsers(); // Rafraîchissez la liste des utilisateurs après l'ajout
    });
  }
  
  applyFilters(filters: any) {
    this.filteredUsers = this.users.filter(user => {
      return (
        (!filters.nomUser || user.nomUser.includes(filters.nomUser)) &&
        (!filters.prenomUser || user.prenomUser.includes(filters.prenomUser)) &&
        (!filters.role || user.role === filters.role) // Ou user.role.some(r => r === filters.role)
      );
    });
  }
  

  // Affiche le formulaire d'ajout d'utilisateur
  show() {
    this.isFormVisible = true;
  }

  // Cache le formulaire d'ajout d'utilisateur
  hide() {
    this.isFormVisible = false;
    this.userForm.reset(); // Réinitialiser le formulaire
  }

  // Création d'un nouvel utilisateur
  createUSer() {
    const formData = new FormData();
    formData.append('nomUser', this.userForm.get('nomUser')?.value);
    formData.append('prenomUser', this.userForm.get('prenomUser')?.value);
    formData.append('photoUser', this.photoUser);
    formData.append('photoCarteIdentite', this.photoCarteIdentite);
    formData.append('genre', this.userForm.get('genre')?.value);
    formData.append('email', this.userForm.get('email')?.value);
    formData.append('telephone', this.userForm.get('telephone')?.value);
    formData.append('dateNaissance', this.userForm.get('dateNaissance')?.value);
    formData.append('numCarteIdentite', this.userForm.get('numCarteIdentite')?.value);
    formData.append('motDePasse', this.userForm.get('motDePasse')?.value);
    formData.append('description', this.userForm.get('description')?.value);
    formData.append('competences', this.userForm.get('competences')?.value);
    
    this.userService.createUser(formData , this.photoUser, this.photoCarteIdentite).subscribe(() => {
      this.loadUsers(); 
      this.isFormVisible = false; 
    });
  }

  // Méthode pour gérer la soumission du formulaire
  onSubmit() {
    if (this.userForm.valid) {
      this.createUser();
    }
  }

  // Méthode pour gérer la sélection de fichiers
  onFileSelected(event: Event, type: string) {
    const fileInput = event.target as HTMLInputElement;
    const file = fileInput.files?.[0];

    if (!this.photoUser || !this.photoCarteIdentite) {
      console.error("Les fichiers ne doivent pas être vides");
      return;
    }
    
    this.userService.createUser(this.user, this.photoUser, this.photoCarteIdentite).subscribe(() => {
      this.loadUsers(); 
      this.isFormVisible = false; 
    });
    
    
  }
  // Méthode pour supprimer un utilisateur
  deleteUsers(idUser : any) {
    this.userService.deleteUser(idUser).subscribe(() => {
      this.loadUsers(); // Recharger les utilisateurs après suppression
    });
  }

  // supprimerUser(idUser: number){
  //   this.userService.deleteUser(idUser).subscribe(()
  // this.loadUsers(); // Recharger les utilisateurs après suppression)
  // Logique de pagination

  get paginatedUsers() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    return this.filteredUsers.slice(startIndex, startIndex + this.itemsPerPage);
  }
  


}