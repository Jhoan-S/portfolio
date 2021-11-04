import { ChangeDetectionStrategy, Component, Input, TemplateRef, ViewChild } from '@angular/core';

@Component({
	selector: 'custom-button',
	templateUrl: './custom-button.component.html',
	styleUrls: ['./custom-button.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CustomButtonComponent {
	@Input() type: string = '';
	@Input() label: string = '';

	@ViewChild('customLabel', { static: true }) customLabel!: TemplateRef<any>;
	@ViewChild('customButton', { static: true }) customButton!: TemplateRef<any>;

	getSelectedTemplate(type: string): TemplateRef<any> | null {
		switch (type) {
			case 'customLabel':
				return this.customLabel;

			case 'customButton':
				return this.customButton;

			default:
				return null;
		}
	}
}
