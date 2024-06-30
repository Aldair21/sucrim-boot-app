import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', redirectTo: 'structure-layout', pathMatch: 'full' },
    { path: 'structure-layout', loadComponent : () => import('./pages/core/structure-layout/structure-layout.component').then(m => m.StructureLayoutComponent), 
        children: [
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', loadComponent : () => import('./pages/core/home/home.component').then(m => m.HomeComponent) }

        ]
    }

];
