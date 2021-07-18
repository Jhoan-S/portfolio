import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// Components
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CustomButtonComponent } from './components/custom-button/custom-button.component';



@NgModule({
	declarations: [
		HeaderComponent,
		FooterComponent,
		CustomButtonComponent
	],
	imports: [
		CommonModule,
		RouterModule
	],
	exports: [
		HeaderComponent,
		FooterComponent,
		CustomButtonComponent
	]
})
export class SharedModule { }
