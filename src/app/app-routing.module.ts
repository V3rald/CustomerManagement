import {NgModule} from '@angular/core';
import {Routes,RouterModule,PreloadAllModules} from '@angular/router';
import { AuthGuard } from './shared/guards/auth.guard';

const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full'},
    {
        path: 'home',
        loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule),
        canActivate: [AuthGuard]
    },
    {
        path: 'registration',
        loadChildren: () => import('./pages/registration/registration.module').then(m => m.RegistrationModule),
    },
    {
        path: 'login',
        loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule),
    },
    {
        path: 'contacts',
        loadChildren: () => import('./pages/contacts/contacts.module').then(m => m.ContactsModule),
        canActivate: [AuthGuard]
    },
    {
        path: 'plans',
        loadChildren: () => import('./pages/plans/plans.module').then(m => m.PlansModule),
        canActivate: [AuthGuard]
    },
    {
        path: 'payments',
        loadChildren: () => import('./pages/payments/payments.module').then(m => m.PaymentsModule),
        canActivate: [AuthGuard]
    },
    {
        path: 'characteristic',
        loadChildren: () => import('./pages/characteristic/characteristic.module').then(m => m.CharacteristicModule),
        canActivate: [AuthGuard]
    },
    {
        path: '**',
        redirectTo: 'home',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules, relativeLinkResolution: 'legacy'})],
    exports: [RouterModule]
})
export class AppRoutingModule { }