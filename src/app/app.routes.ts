import { Routes } from '@angular/router';
import { MainComponent } from './componets/main/main.component';
import { AppComponent } from './app.component';
export const routes: Routes = [
    {path: '', redirectTo: '/home',pathMatch: 'full'},
    {path: 'home', component: MainComponent},
];
