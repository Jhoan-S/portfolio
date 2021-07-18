import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

// Modules
import { CoreModule } from '../components/core.module';
import { SharedModule } from 'src/app/shared/shared.module';

// Components
import { HomeComponent } from './home.component';

const routes: Routes = [{ path: '', component: HomeComponent }];

@NgModule({
	declarations: [
		HomeComponent
	],
	imports: [
		CoreModule,
		SharedModule,
		CommonModule,
		RouterModule.forChild(routes)
	],
	exports: [
		HomeComponent
	]
})
export class HomeModule { }
