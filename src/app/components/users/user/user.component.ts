import { Component, OnInit } from '@angular/core';


declare interface TableData {
  headerRow: string[];
  dataRows: string[][];
}

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent implements OnInit {
  public tableData!: TableData;

  ngOnInit(){
    this.tableData = {
        headerRow: [ 'ID', 'Nom', 'Prenom', 'Profil', 'Mail', 'Telephone', 'TypeUser'],
        dataRows: [
        
        ],

      
}
  }
}
