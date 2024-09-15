import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', loadComponent: () => import('./home/home.component').then(m => m.HomeComponent) },
    { path: 'new-game', loadComponent: () => import('./new-game/new-game.component').then(m => m.NewGameComponent) },
    { path: '**', redirectTo: '' }
];
