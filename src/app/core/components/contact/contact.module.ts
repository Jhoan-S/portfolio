import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactComponent } from './contact.component';
import { RouterModule, Routes } from '@angular/router';
import { CustomButtonModule } from 'src/app/shared/components/custom-button/custom-button.module';
import { ReactiveFormsModule } from '@angular/forms';

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
        CustomButtonModule,
        ReactiveFormsModule,
        RouterModule.forChild(routes)
    ],
    exports: [...components]
})
export class ContactModule { }