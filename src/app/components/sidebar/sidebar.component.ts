import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';

// Simuler une interface représentant l'utilisateur et son type
export interface User {
  id: number;
  typeUser: string;  // Peut contenir "Admin", "Jeune", "Senior", etc.
  organization?: boolean;  // Indiquer si l'utilisateur appartient à une organisation
}

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule,MatIconModule ],  
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})

export class SidebarComponent implements OnInit {
  public menuItems!: any[];
  public currentUser!: User;  // Utilisateur actuel

  ngOnInit() {
    // Simulation : L'utilisateur est supposé être récupéré d'une API ou d'un service
    this.currentUser = { id: 1, typeUser: 'Admin', organization: true };  // Exemple de données utilisateur
  }

  // Vérifie si l'utilisateur a un certain type ou appartient à une organisation
  hastypeUser(expectedType: string): boolean {
    if (this.currentUser.organization) {
      return true;  // Si l'utilisateur fait partie d'une organisation, il a accès aux pages
    }
    return this.currentUser.typeUser === expectedType;
  }

  // Méthode pour vérifier si le lien est actif (simplification)
  isActive(path: string): boolean {
    return window.location.pathname === path;
  }

  // Vérifie si l'utilisateur n'est pas "Jeune"
  isNotJeune(): boolean {
    return this.currentUser.typeUser !== 'Jeune';
  }
}
