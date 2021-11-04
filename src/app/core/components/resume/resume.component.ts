import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-resume',
    templateUrl: './resume.component.html',
    styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit {

    education: Knowledge[] = [
        {
            type: 'text',
            city: 'Lima',
            title: 'Computación e Informática',
            tasks: [],
            endDate: '2019',
            startDate: '2017',
            enterprise: 'Cibertec',
            description: 'Main focus of the master program Information Management: Managing informatics in organizations, with an emphasis on the security of information systems.'
        }
    ];

    experience: Knowledge[] = [
        {
            type: 'list',
            city: 'Lima',
            title: 'Desarrollador Web',
            tasks: [
                'Manejo de GIT.',
                'Desarrollo utilizando metodología SCRUM.',
                'Desarrollo de componentes personalizados.',
                'Desarrollo de nuevos módulos para los proyectos.',
                'Desarrollo de API REST en JAVA con SpringBoot y JPA.',
                'Desarrollo de interfaces de usuario en Angular 8 - 12.'
            ],
            endDate: 'Nov 2020',
            startDate: 'Actualidad',
            enterprise: 'Sintad',
            description: ''
        },
        {
            type: 'list',
            city: 'Lima',
            title: 'Programador Web Practicante',
            tasks: [
                'Manejo de GIT.',
                'Desarrollo utilizando metodología SCRUM.',
                'Implementación de API REST con PHP y JS.',
                'Desarrollo de interfaces para usuarios en HTML, CSS3.',
            ],
            endDate: 'Mar 2020',
            startDate: 'Ago 2020',
            enterprise: 'R.E.N.A.C.E',
            description: ''
        }
    ];

    constructor() { }

    ngOnInit(): void { }
}

interface Knowledge {
    type: string;
    city: string;
    title: string;
    tasks: string[];
    endDate: string;
    startDate: string;
    enterprise: string;
    description: string;
}
