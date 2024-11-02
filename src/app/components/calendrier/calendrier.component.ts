import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { startOfDay, parseISO, setHours, setMinutes } from 'date-fns';
import { Evenement } from '../../models/evenement';
import { EvenementService } from '../../services/evenement/evenement.service';
import { CalendarModule, CalendarEventTimesChangedEvent, DateAdapter, CalendarNativeDateFormatter } from 'angular-calendar';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-calendrier',
  standalone: true,
  imports: [
    CommonModule,
    // CalendarModule.forRoot(
    //   provide: DateAdapter,
    //   useValue: CalendarNativeDateFormatter,
    // )
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './calendrier.component.html',
  styleUrls: ['./calendrier.component.scss']
})
export class CalendrierComponent implements OnInit {
  evenements: Evenement[] = [];

  constructor(private evenementService: EvenementService) {}

  ngOnInit() {
    this.loadEvenements();
  }

  loadEvenements() {
    this.evenementService.getAllEvenement().subscribe(
      (data: Evenement[]) => {
        this.evenements = data.map(evenement => ({
          idEvenement: evenement.idEvenement,
          libelle: evenement.libelle,
          description: evenement.description,
          lieuEvenement: evenement.lieuEvenement,
          dateDebutEvenement: evenement.dateDebutEvenement,
          dateFinEvenement: evenement.dateFinEvenement,
          heureDebutEvenement: evenement.heureDebutEvenement,
          heureFinEvenement: evenement.heureFinEvenement,
          start: this.getStartDate(evenement),
          end: this.getEndDate(evenement),
          title: evenement.libelle,
          color: { primary: '#1e90ff', secondary: '#D1E8FF' },
          organisateur: evenement.organisateur,
          nbrPoste: evenement.nbrPoste,
          typeEvenement: evenement.typeEvenement
        }));
      },
      (error: any) => console.error('Erreur de chargement', error)
    );
  }

  getStartDate(event: Evenement): Date {
    const dateDebutEvenement = parseISO(event.dateDebutEvenement);
    const heureDebutEvenement = event.heureDebutEvenement.split(':');
    return setHours(setMinutes(dateDebutEvenement, +heureDebutEvenement[1]), +heureDebutEvenement[0]);
  }

  getEndDate(event: Evenement): Date | undefined {
    const dateFinEvenement = parseISO(event.dateFinEvenement);
    const heureFinEvenement = event.heureFinEvenement ? event.heureFinEvenement.split(':') : null;
    return heureFinEvenement ? setHours(setMinutes(dateFinEvenement, +heureFinEvenement[1]), +heureFinEvenement[0]) : undefined;
  }
}
