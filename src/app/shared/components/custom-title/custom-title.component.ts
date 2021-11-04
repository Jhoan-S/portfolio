import { Component, Input } from '@angular/core';

@Component({
    selector: 'custom-title',
    template: `
        <div class="title">
            <h3 class="title__selector">{{ title }}</h3>
        </div>
    `,
    styles: [`
        .title {
            color: #f8f8f8;
            margin-bottom: 1.5rem;
        }

        .title .title__selector {
            width: 300px;
            position: relative;
            padding-bottom: .2rem;
            border-bottom: 2px solid #3e3e3e;
        }

        .title .title__selector::after {
            content: "";
            position: absolute;
            bottom: -2px;
            left: 0;
            width: 40px;
            border-bottom: 2px solid #0080ff;
        }
    `]
})
export class CustomTitleComponent {

    @Input() title: string = '';

    constructor() { }
}
