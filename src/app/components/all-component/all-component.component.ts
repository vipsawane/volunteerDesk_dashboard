import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from '../sidebar/sidebar.component';

@Component({
  selector: 'app-all-component',
  standalone: true,
  imports: [RouterOutlet, 
    SidebarComponent,

    
  ],  templateUrl: './all-component.component.html',
  styleUrl: './all-component.component.scss'
})
export class AllComponentComponent {

}
