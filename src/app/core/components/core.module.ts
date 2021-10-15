import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: 'about-me',
        loadChildren: () => import('./about-me/about-me.module').then(m => m.AboutMeModule),
    },
    {
        path: 'contact',
        loadChildren: () => import('./contact/contact.module').then(m => m.ContactModule),
    },
    {
        path: '',
        redirectTo: 'about-me',
        pathMatch: 'full',
    },
];

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        RouterModule.forChild(routes)],
    exports: [],
    providers: [],
})
export class CoreModule { }