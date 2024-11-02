import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCard, MatCardActions, MatCardContent, MatCardHeader, MatCardSubtitle, MatCardTitle } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { UserFormComponent } from '../users/user-form/user-form.component';

@Component({
  selector: 'app-publication',
  standalone: true,
  imports: [
    CommonModule,  // Pour *ngIf, *ngFor, etc.
      ReactiveFormsModule,  // Pour les formulaires réactifs et formGroup
      MatFormFieldModule,  // Pour mat-form-field
      MatInputModule,  // Pour matInput
      MatButtonModule,  // Pour mat-raised-button
      MatCardHeader,
      MatCardTitle,
      MatCardSubtitle,
      MatCardContent,
      MatCard,
      CommonModule, 
      UserFormComponent,
      MatCardActions

  ],
  templateUrl: './publication.component.html',
  styleUrl: './publication.component.scss'
})
export class PublicationComponent {

}
