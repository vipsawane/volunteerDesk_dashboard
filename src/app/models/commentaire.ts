export interface Commentaire {
    idCommentaire:      number;
    contenuCommentaire: string;
    dateCommentaire:    string;
    publication:        Publication;
    ressource:          Ressource;
}

export interface Publication {
    idPublication:      number;
    imagePublication:   string;
    contenuPublication: string;
    datePublication:    string;
    likePublication:    number;
}

export interface Ressource {
    idRessource:      number;
    imageRessource:   string;
    libelleRessource: string;
    contenuRessource: string;
    likeRessource:    number;
}
