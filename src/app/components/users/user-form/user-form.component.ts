import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { User } from '../../../models/user';
import { UserService } from '../../../services/user/user.service';

@Component({
  selector: 'app-user-form',
  standalone: true,
  imports: [
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatFormFieldModule,
    ReactiveFormsModule
  ],
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {
  userForm: FormGroup;
  @Output() userAdded = new EventEmitter<User>();

  constructor(private fb: FormBuilder, private userService: UserService) {
    this.userForm = this.fb.group({
      nomUser: ['', Validators.required],
      prenomUser: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      telephone: ['', Validators.required],
      role: ['', Validators.required],
      competences: [''],
      motDePasse: ['', [Validators.required, Validators.minLength(8)]],
      description: [''],
      dateNaissance: [''],
      numCarteIdentite: [''],
      anneeExperience: [null],
      photoUser: [null],
      photoCarteIdentite: [null],
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.userForm.valid) {
      const user: User = this.userForm.value;
      const photoUser = this.userForm.get('photoUser')?.value;
      const photoCarteIdentite = this.userForm.get('photoCarteIdentite')?.value;

      this.userService.createUser(user, photoUser, photoCarteIdentite).subscribe(
        (response: any) => {
          this.userAdded.emit(response); // Émet l'utilisateur ajouté
          this.userForm.reset(); // Réinitialise le formulaire
        },
        (error: any) => {
          console.error("Erreur lors de l'ajout de l'utilisateur", error);
        }
      );
    }
  }

  onFileSelected(event: any, field: string): void {
    const file = event.target.files[0];
    this.userForm.patchValue({ [field]: file });
  }
}
