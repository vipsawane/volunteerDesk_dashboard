export interface DetailsEvenement {
    idDetailsEvenement: number;
    lieuEvenement:      string;
    dateDebutEvenement: string;
    dateFinEvenement:   string;
    participation:      boolean;
    nbrCandidat:        number;
    organisateur:       string;
    evenement:          Evenement;
    formateur:          string;
}

export interface Evenement {
    idEvenement:   number;
    libelle:       string;
    description:   string;
    nbrPoste:      string;
    photo:         string;
    typeEvenement: TypeEvenement;
}

export interface TypeEvenement {
    idTypeEvenement:      number;
    libelleTypeEvenement: string;
}