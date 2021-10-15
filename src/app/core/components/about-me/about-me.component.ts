import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'about-me',
	templateUrl: './about-me.component.html',
	styleUrls: ['./about-me.component.scss'],
})
export class AboutMeComponent implements OnInit {
	profilePhoto: string;

	constructor() {
		this.profilePhoto = '../../../../assets/img/itachi_2.jpg';
		// this.profilePhoto = '../../../../assets/img/jhoan-d.jpg';
		// this.profilePhoto = '../../../../assets/img/jhoan-dc.jpg';
		// this.profilePhoto = '../../../../assets/img/jhoan-dh.jpg';
	}

	ngOnInit(): void {}
}
