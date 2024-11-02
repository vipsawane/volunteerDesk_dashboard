import { Candidature } from "./candidature";
import { Role } from "./role";
import { Sanction } from "./sanction";

export interface User {
    idUser:             number;
    nomUser:            string;
    prenomUser:         string;
    genre:              String;
    photoUser:          string;
    description:        string;
    password:         string;
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

