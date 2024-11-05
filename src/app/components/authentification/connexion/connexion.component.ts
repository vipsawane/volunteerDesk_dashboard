import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, NgForm, NgModel, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth/auth.service';
import { User } from '../../../models/user';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.scss'],
  standalone: true,
  imports: [
    ReactiveFormsModule,
    CommonModule,
    FormsModule
  ]
})
export class ConnexionComponent {
  email: string = '';
  password: string = '';
  rememberMe = true;
  alertController: any;

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  async login(form: NgForm) {
    if (form.valid) {
      this.authService.authenticate(this.email, this.password).subscribe(
        async (user: User | null) => {
          if (user) {
            console.log(' connexion réussie', this.email);
            this.authService.storeUser(user);
            this.router.navigate(['/dashboard']);
          } else {
            await this.showAlert('Erreur', 'Utilisateur non trouvé');
          }
        },
        async (error: any) => {
          console.error('Erreur de connexion', error);
          await this.showAlert('Erreur', 'Mot de passe ou email incorrecte');
        }
      );
    } else {
      await this.showAlert('Erreur', 'Veuillez entrer des informations valides');
    }
  }

   // Méthode pour afficher un popup d'alerte
   async showAlert(header: string, message: string) {
    const alert = await this.alertController.create({
      header: header,
      message: message,
      buttons: ['OK']
    });
    await alert.present();
  }

  getUserInfo() {
    const user = this.authService.getUser();
    console.log('User Info:', user);
  }
}