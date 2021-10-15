import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
	selector: 'app-contact',
	templateUrl: './contact.component.html',
	styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {

	contactForm!: FormGroup;

	constructor(private _fb: FormBuilder) {
		this.initForm();
	}

	ngOnInit(): void { }

	initForm(): void {
		this.contactForm = this._fb.group({
			fullName: [],
			email: [],
			subject: [],
			message: []
		});
	}

	onSubmit(): void {
		// const form = this.contactForm.getRawValue();
		const contact: ContactMail = {
			fullName: this.contactForm.get('fullName')?.value,
			email: this.contactForm.get('email')?.value,
			subject: this.contactForm.get('subject')?.value,
			message: this.contactForm.get('message')?.value
		}
		console.log(contact);
	}
}

interface ContactMail {
	fullName: string;
	email: string;
	subject: string;
	message: string;
}
