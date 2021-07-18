import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutMeComponent } from './about-me/about-me.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
	declarations: [
		AboutMeComponent
	],
	imports: [
		SharedModule,
		CommonModule
	],
	exports: [
		AboutMeComponent
	]
})
export class CoreModule { }
