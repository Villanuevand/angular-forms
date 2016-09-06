import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent }  from './app.component';
import { routing,
    appRoutingProviders } from './app.routing';

import { TemplateDrivenComponent }    from './template-driven.component';
import { FormBuilderComponent }  from './form-builder.component';

@NgModule({
  imports: [
      BrowserModule,
      FormsModule,
      ReactiveFormsModule,
      routing
  ],
  declarations: [
      AppComponent,
      TemplateDrivenComponent,
      FormBuilderComponent
  ],
  providers: [appRoutingProviders],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
