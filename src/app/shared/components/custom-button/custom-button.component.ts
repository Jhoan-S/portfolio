import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
	selector: 'custom-button',
	templateUrl: './custom-button.component.html',
	styleUrls: ['./custom-button.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class CustomButtonComponent {

	@Input() label: string = '';

	constructor() { }

}
