import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutMeComponent } from './about-me.component';
import { CustomButtonModule } from 'src/app/shared/components/custom-button/custom-button.module';
import { RouterModule, Routes } from '@angular/router';

const component = [AboutMeComponent];

const routes: Routes = [
    {
        path: '',
        component: AboutMeComponent,
    }
];

@NgModule({
    declarations: [...component],
    imports: [
        CommonModule,
        CustomButtonModule,
        RouterModule.forChild(routes)
    ],
    exports: [...component]
})
export class AboutMeModule { }