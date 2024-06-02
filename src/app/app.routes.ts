import { Routes } from '@angular/router';
import { MainComponent } from './componets/main/main.component';
import { MainMenuComponent } from './componets/main-menu/main-menu.component';
import { AppComponent } from './app.component';
export const routes: Routes = [
    {path: '', redirectTo: '/home',pathMatch: 'full'},
    {path: 'home', component: MainComponent},
    {path: 'menu', component: MainMenuComponent},
];
