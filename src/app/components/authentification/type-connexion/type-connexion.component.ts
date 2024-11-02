import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-type-connexion',
  templateUrl: './type-connexion.component.html',
  styleUrls: ['./type-connexion.component.scss']
})
export class TypeConnexionComponent {

  constructor(private router: Router) {}

  navigateToUserConnexion() {
    this.router.navigate(['/user-connexion']);
  }

  navigateToOrganisationConnexion() {
    this.router.navigate(['/organisation-connexion']);
  }
}
