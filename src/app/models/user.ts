export interface User {
    idUser:             number;
    nomUser:            string;
    prenomUser:         string;
    photoUser:          string;
    description:        string;
    motDePasse:         string;
    email:              string;
    telephone:          string;
    dateNaissance:      Date;
    numCarteIdentite:   string;
    photoCarteIdentite: string;
    competences:        string;
    anneeExperience:    number;
    nbrSuspension:      number;
    role:               Role;
    sanction:           Sanction;
    candidature:        Candidature;
}

export interface Candidature {
    idCandidature:      number;
    libelleCandidature: string;
    etatCandidature:    string;
    dateCandidature:    string;
    evenement:          Evenement;
}

export interface Evenement {
    idEvenement:   number;
    libelle:       string;
    description:   string;
    nbrPoste:      string;
    photo:         string;
    typeEvenement: TypeEvenement;
    user:          string;
    organisation:  Organisation;
}

export interface Organisation {
    idOrganisation:       number;
    numeroIdentification: string;
    motDePasse:           string;
    raisonSocial:         string;
    logo:                 string;
    description:          string;
    emailOrganisation:    string;
    contact:              string;
    adresse:              string;
    siege:                string;
    domaineActivite:      string;
    dateCreation:         string;
    nbrSanction:          number;
    sanction:             Sanction;
    typeOrganisation:     TypeOrganisation;
    candidature:          string;
}

export interface Sanction {
    idSanction:      number;
    libelleSanction: string;
    motifSanction:   string;
}

export interface TypeOrganisation {
    idTypeOrganisation:      number;
    libelleTypeOrganisation: string;
    organisations:           string[];
}

export interface TypeEvenement {
    idTypeEvenement:      number;
    libelleTypeEvenement: string;
}

export interface Role {
    idRole:      number;
    libelleRole: string;
}
