import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'] // Correction de styleUrl en styleUrls
})
export class NavbarComponent {
  @Input() pageName: string = ''; // Propriété pour le nom de la page
}
