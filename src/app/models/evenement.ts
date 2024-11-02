import { User } from "./candidature";

export interface Evenement {
    idEvenement:   number;
    libelle:       string;
    description:   string;
    lieuEvenement:      string;
    dateDebutEvenement: string;
    dateFinEvenement:   string;
    heureDebutEvenement: string;
    heureFinEvenement:   string;
    organisateur:       string;
    nbrPoste:      string;
    // photo:         string;
    typeEvenement: String;

}



