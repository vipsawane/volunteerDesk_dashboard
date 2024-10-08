import { Sanction } from './models/sanction';
import { Routes } from '@angular/router';
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
import { ConnexionComponent } from './components/authentification/connexion/connexion.component';
// import { UtilisateurComponent } from './components/users/utilisateurs/utilisateurs.component';
import { UserFormComponent } from './components/users/user-form/user-form.component';
import { OrganisationFormComponent } from './components/users/organisations/organisation-form/organisation-form.component';
import { UserListComponent } from './components/users/user-list/user-list.component';
import { OrganisationListComponent } from './components/users/organisations/organisation-list/organisation-list.component';

export const routes: Routes = [
    { path: '', redirectTo: '/form', pathMatch: 'full'},
    {path: 'connexion', component: ConnexionComponent},
    {path: 'sidebar', component: SidebarComponent},
    {path:'dashboard', component: DashboardComponent},
    // {path: 'utilisateurs', component: UtilisateurComponent},
    {path: 'evenement', component: EvenementComponent},
    {path: 'evenementDetails', component: EvenementDetailsComponent},
    {path: 'sanction', component: SanctionComponent},
    {path: 'message', component: MessageComponent},
    {path: 'notification', component: NotificationComponent},
    {path: 'publication', component: PublicationComponent},
    {path: 'recrutement', component: RecrutementComponent},
    {path: 'ressource', component: RessourceComponent},
    {path: 'user-form', component: UserFormComponent},
    {path: 'user-list', component: UserListComponent},
    {path: 'organisation-form', component: OrganisationFormComponent},
    {path: 'organisation-list', component: OrganisationListComponent},
    {path: 'user-form', component: UserFormComponent},
    {path: 'user-list', component: UserListComponent},

    

];
