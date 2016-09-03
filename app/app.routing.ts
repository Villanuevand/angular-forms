import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TemplateDrivenComponent }  from './template-driven.component';
import { FormBuilderComponent }    from './form-builder.component';
const appRoutes: Routes = [
    { path: 'template-driven', component: TemplateDrivenComponent },
    { path: 'form-builder', component: FormBuilderComponent }
];
export const appRoutingProviders: any[] = [
];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);