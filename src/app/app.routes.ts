import { Routes } from '@angular/router';
import { AuthGuard } from './guards/keycloak-auth-guard.guard';

export const routes: Routes = [
    { path: '', loadComponent : () => import('./pages/core/structure-layout/structure-layout.component').then(m => m.StructureLayoutComponent), canActivate: [AuthGuard],
        children: [
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', loadComponent : () => import('./pages/core/home/home.component').then(m => m.HomeComponent) }
        ]
    },
    { path: 'flow-desinger', loadComponent : () => import('./pages/core/bot-flow-designer/bot-flow-designer.component').then(m => m.BotFlowDesignerComponent), canActivate: [AuthGuard] },
    { path: '**', redirectTo: '' }
];
