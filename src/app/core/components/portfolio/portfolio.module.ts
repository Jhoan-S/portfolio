import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { PortfolioComponent } from './portfolio.component';
import { CustomHeaderModule } from 'src/app/shared/components/custom-header/custom-header.module';

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
        CustomHeaderModule,
        RouterModule.forChild(routes)
    ],
    exports: [
        PortfolioComponent
    ]
})
export class PortfolioModule { }