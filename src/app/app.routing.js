"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var home_component_1 = require("./components/home/home.component");
var appRoutes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: '',
        component: home_component_1.HomeComponent
        //  canActivate: [AuthGuardService],
        // children: [
        //     //  { path: '', loadChildren: './components/dashboard/dashboard.module#DashboardModule' }
        //      ]
    }
];
exports.appRoutingProviders = [];
exports.routing = router_1.RouterModule.forRoot(appRoutes, { useHash: true });
//# sourceMappingURL=app.routing.js.map