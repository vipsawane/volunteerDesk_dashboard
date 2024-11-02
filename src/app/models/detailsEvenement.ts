import { Evenement } from "./evenement";

export interface DetailsEvenement {
    idDetailsEvenement: number;
    participation:      boolean;
    nbrCandidat:        number;
    evenement:          Evenement;
    formateur:          string;
}

