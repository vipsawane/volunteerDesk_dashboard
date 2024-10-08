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

