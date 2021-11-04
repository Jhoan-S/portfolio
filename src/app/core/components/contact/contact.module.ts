import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactComponent } from './contact.component';
import { RouterModule, Routes } from '@angular/router';
import { CustomButtonModule } from 'src/app/shared/components/custom-button/custom-button.module';
import { ReactiveFormsModule } from '@angular/forms';
import { CustomTitleModule } from 'src/app/shared/components/custom-title/custom-title.module';
import { CustomHeaderModule } from 'src/app/shared/components/custom-header/custom-header.module';

const components = [ContactComponent];

const routes: Routes = [
    {
        path: '',
        component: ContactComponent
    }
];

@NgModule({
    declarations: [...components],
    imports: [
        CommonModule,
        CustomTitleModule,
        CustomHeaderModule,
        CustomButtonModule,
        ReactiveFormsModule,
        RouterModule.forChild(routes)
    ],
    exports: [...components]
})
export class ContactModule { }