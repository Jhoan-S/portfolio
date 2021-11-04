import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { ResumeComponent } from './resume.component';
import { CustomTitleModule } from 'src/app/shared/components/custom-title/custom-title.module';
import { CustomHeaderModule } from 'src/app/shared/components/custom-header/custom-header.module';
import { CustomCardModule } from 'src/app/shared/components/custom-card/custom-card.module';

const routes: Routes = [
    {
        path: '',
        component: ResumeComponent
    }
];


@NgModule({
    declarations: [
        ResumeComponent
    ],
    imports: [
        CommonModule,
        CustomCardModule,
        CustomTitleModule,
        CustomHeaderModule,
        RouterModule.forChild(routes)
    ],
    exports: [
        ResumeComponent
    ]
})
export class ResumeModule { }