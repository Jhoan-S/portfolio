import { Component, Input } from '@angular/core';

@Component({
    selector: 'custom-header',
    template: `<div class="content__title">{{ headerTitle }}</div>`,
    styles: [`
        .content__title {
            color: #f8f8f8;
            padding: 3% 0;
            font-size: 40px;
            font-weight: 700;
            border-bottom: 2px solid #3e3e3e;
        }
    `]
})
export class CustomHeaderComponent {

    @Input() headerTitle: string = '';

    constructor() { }
}
