import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
    templateUrl: './app/templates/form-builder.component.html'
})
export class FormBuilderComponent implements OnInit{

    registerForm: FormGroup;
    formValues: any;

    constructor(private fb: FormBuilder) {};

    ngOnInit() {
        this.registerForm = this.fb.group({
            user: this.fb.group({
                firstname: ['Andres'],
                lastname: ['Villanueva'],
            }),
            address: this.fb.group({
                street: [],
                zip: [],
                city: []
            })
        });
    }

    submitForm () {
        console.log('click submit!');
        this.formValues = this.registerForm.value;
    }
}
