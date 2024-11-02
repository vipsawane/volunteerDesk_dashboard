import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth/auth.service';
import { CommonModule } from '@angular/common';
import { UserService } from '../../../services/user/user.service';

@Component({
  selector: 'app-connexion',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],  
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.scss']
})
export class ConnexionComponent {
  connexionForm: FormGroup;
  errorMessage: string | null = null;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private uService : UserService,
    private router: Router
  ) {
    this.connexionForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.connexionForm.valid) {
        const { email, password } = this.connexionForm.value; // Déstructuration pour plus de clarté
        this.authService.connexion(email, password).subscribe({
            next: (response: any) => {
                console.log('Connexion réussie:', response);
                this.router.navigate(['/dashboard']);
            },
            error: (err) => {
                console.error('Erreur de connexion:', err);
                this.errorMessage = 'Erreur lors de la connexion. Veuillez vérifier vos informations.';
            }
        });
    } else {
        this.errorMessage = 'Veuillez remplir correctement le formulaire.';
    }
}
  }
