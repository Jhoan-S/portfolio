import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// Components
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
// import { CustomButtonComponent } from './components/custom-button/custom-button.component';

const shared = [HeaderComponent, FooterComponent];

@NgModule({
	declarations: [...shared],
	imports: [CommonModule, RouterModule],
	exports: [...shared],
})
export class SharedModule { }
