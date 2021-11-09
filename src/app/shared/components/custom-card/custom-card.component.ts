import { Component, Input, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { Knowledge } from '@models/Knowledge';

@Component({
    selector: 'custom-card',
    templateUrl: './custom-card.component.html',
    styleUrls: ['./custom-card.component.scss']
})
export class CustomCardComponent implements OnInit {

    @Input() conocimientos: Knowledge[] = [];
    @ViewChild('list', { static: true }) list!: TemplateRef<any>;
    @ViewChild('text', { static: true }) text!: TemplateRef<any>;

    constructor() { }

    ngOnInit(): void { }

    getSelectedTemplate(type: string): TemplateRef<any> | null {
        switch (type) {
            case 'list':
                return this.list;
            case 'text':
                return this.text;
            default:
                return null;
        }
    }
}
