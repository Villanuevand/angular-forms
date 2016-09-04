import { Component } from '@angular/core';
@Component({
    templateUrl: './app/templates/template-driven.component.html'
})
export class TemplateDrivenComponent {
    public formValues: any;

    firstName = 'Andrés';
    lastName = 'Villanueva';

    submitForm(form:any) {
        this.formValues = form;
    }
}
