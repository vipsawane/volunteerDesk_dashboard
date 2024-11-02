// src/app/app.routes.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { EvenementComponent } from './components/Evenements/evenement/evenement.component';
import { EvenementDetailsComponent } from './components/Evenements/evenement-details/evenement-details.component';
import { MessageComponent } from './components/message/message.component';
import { NotificationComponent } from './components/notification/notification.component';
import { PublicationComponent } from './components/publication/publication.component';
import { RecrutementComponent } from './components/Recrutements/recrutement/recrutement.component';
import { RessourceComponent } from './components/Ressources/ressource/ressource.component';
import { SanctionComponent } from './components/sanction/sanction.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { UserListComponent } from './components/users/user-list/user-list.component';
import { OrganisationListComponent } from './components/users/organisations/organisation-list/organisation-list.component';
import { TypeConnexionComponent } from './components/authentification/type-connexion/type-connexion.component';
import { AllComponentComponent } from './components/all-component/all-component.component';
import { ConnexionComponent } from './components/authentification/connexion/connexion.component';
import { CompteComponent } from './components/compte/compte.component';
import { ParametreComponent } from './components/parametre/parametre.component';
import { CalendrierComponent } from './components/calendrier/calendrier.component';

export const routes: Routes = [
    { path: '', redirectTo: '/connexion', pathMatch: 'full'},
    {
        path: '',
        children:[

            { path: 'connexion', component: ConnexionComponent },
            { path: 'typeConnexion', component: TypeConnexionComponent },
        ]

    },

    {
    path: '',
    component: AllComponentComponent,
    children: [
        {path: 'sidebar', component: SidebarComponent},
        {path:'dashboard', component: DashboardComponent},
        // {path: 'utilisateurs', component: UtilisateurComponent},
        {path: 'evenement', component: EvenementComponent},
        {path: 'evenementDetails', component: EvenementDetailsComponent},
        {path: 'sanction', component: SanctionComponent},
        {path: 'message', component: MessageComponent},
        {path: 'compte', component: CompteComponent},
        {path: 'parametre', component: ParametreComponent},
        {path: 'calendrier', component: CalendrierComponent},
        {path: 'notification', component: NotificationComponent},
        {path: 'publication', component: PublicationComponent},
        {path: 'recrutement', component: RecrutementComponent},
        {path: 'ressource', component: RessourceComponent},
        {path: 'user-list', component: UserListComponent},
        {path: 'organisation-list', component: OrganisationListComponent},
    

    ]
    },


   
    // {
    //     path: '**',
    //     redirectTo: '/typeConnexion' // Redirection vers la page de connexion si l'URL n'est pas reconnue
    // }

    
    

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }


