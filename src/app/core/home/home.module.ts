import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

// Components
import { HomeComponent } from './home.component';
import { SharedModule } from 'src/app/shared/shared.module';

const routes: Routes = [{ path: '', component: HomeComponent }];

@NgModule({
	declarations: [
		HomeComponent
	],
	imports: [
		SharedModule,
		CommonModule,
		RouterModule.forChild(routes)
	],
	exports: [
		HomeComponent
	]
})
export class HomeModule { }
