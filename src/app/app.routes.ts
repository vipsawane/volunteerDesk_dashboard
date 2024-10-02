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
import { InscriptionComponent } from './components/authentification/inscription/inscription.component';
import { ConnexionComponent } from './components/authentification/connexion/connexion.component';
import { UserComponent } from './components/users/user/user.component';

export const routes: Routes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full'},
    {path: 'connexion', component: ConnexionComponent},
    {path: 'inscription', component: InscriptionComponent},
    {path: 'sidebar', component: SidebarComponent},
    {path:'dashboard', component: DashboardComponent},
    {path: 'user', component: UserComponent},
    {path: 'evenement', component: EvenementComponent},
    {path: 'evenementDetails', component: EvenementDetailsComponent},
    {path: 'sanction', component: SanctionComponent},
    {path: 'message', component: MessageComponent},
    {path: 'notification', component: NotificationComponent},
    {path: 'publication', component: PublicationComponent},
    {path: 'recrutement', component: RecrutementComponent},
    {path: 'ressource', component: RessourceComponent},
    

];
