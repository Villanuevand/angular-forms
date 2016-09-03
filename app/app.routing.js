"use strict";
var router_1 = require('@angular/router');
var template_driven_component_1 = require('./template-driven.component');
var form_builder_component_1 = require('./form-builder.component');
var appRoutes = [
    { path: 'template-driven', component: template_driven_component_1.TemplateDrivenComponent },
    { path: 'form-builder', component: form_builder_component_1.FormBuilderComponent }
];
exports.appRoutingProviders = [];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map