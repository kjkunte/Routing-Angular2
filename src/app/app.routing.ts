 import { ModuleWithProviders } from '@angular/core';
 import { Routes, RouterModule } from '@angular/router';
 import { HomeComponent } from './components/home/home.component';


const appRoutes: Routes = [
    { path: '',  component: HomeComponent, pathMatch: 'full' },

    //  { path: 'Rome',
      // component: HomeComponent,
    //  canActivate: [AuthGuardService],
      // children: [
    //     //  { path: '', loadChildren: './components/dashboard/dashboard.module#DashboardModule' }
        //  ]
    // }
] 
export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes, { useHash: true });
