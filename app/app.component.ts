import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
    <h1>¡Forms Forms Forms!</h1>
    <nav>
        <a title="Forma más sencilla" routerLink="/template-driven" routerLinkActive="active">Template Driven</a>
        <a title="Forma más compleja" routerLink="/form-builder" routerLinkActive="active">Form Builder</a>
    </nav>
    <router-outlet></router-outlet>
    `
})
export class AppComponent { }
