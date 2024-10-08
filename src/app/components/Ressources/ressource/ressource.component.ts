/**
 * @title Card with multiple sections
 */
import {ChangeDetectionStrategy, Component} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-ressource',
  templateUrl: './ressource.component.html',
  styleUrl: './ressource.component.scss',
  standalone: true,
  imports: [MatCardModule, MatButtonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RessourceComponent {

 



}
