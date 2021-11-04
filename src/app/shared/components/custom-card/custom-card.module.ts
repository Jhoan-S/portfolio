import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomCardComponent } from './custom-card.component';
import { CustomButtonModule } from '../custom-button/custom-button.module';

@NgModule({
    declarations: [CustomCardComponent],
    imports: [
        CommonModule,
        CustomButtonModule
    ],
    exports: [CustomCardComponent]
})
export class CustomCardModule { }