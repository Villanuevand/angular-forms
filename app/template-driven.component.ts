import { Component } from '@angular/core';
@Component({
    templateUrl: './app/templates/template-driven.component.html'
})
export class TemplateDrivenComponent {

    submitForm(values) {
        console.log(values);
    }
}
