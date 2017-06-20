import { HomeComponent } from '../../app/pages/home/home.component';
import { Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

export const RouterApp : Routes = [
    { path: '', redirectTo: '/page', pathMatch: 'full'},
    { path: 'page', loadChildren: 'app/pages/pages.module#PagesModule' },
    { path: 'admin' , loadChildren: 'app/admin/admin.module#AdminModule' },
    { path: '**', component: PageNotFoundComponent }
]