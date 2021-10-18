import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { PortfolioComponent } from './portfolio.component';

const routes: Routes = [
    {
        path: '',
        component: PortfolioComponent
    }
];

@NgModule({
    declarations: [
        PortfolioComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes)
    ],
    exports: [
        PortfolioComponent
    ]
})
export class PortfolioModule { }