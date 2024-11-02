import { Routes } from "@angular/router"
import { TypeConnexionComponent } from "./type-connexion/type-connexion.component"

export const routes: Routes = [

    {
        path: '',
        children:[
{ 
    
    path: 'typeConnexion', component: TypeConnexionComponent },
]

    },


]