import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { Routes, RouterModule } from '@angular/router';

import { SharedModule } from 'src/app/shared/shared.module';

import { OlvidoContrasenaComponent } from 'src/app/modules/olvidocontrasena/components/olvidocontrasena/olvidocontrasena.component';

const routes: Routes = [
    {
        path: '',
        component: OlvidoContrasenaComponent
    }
];

export const router: ModuleWithProviders<RouterModule> = RouterModule.forChild(routes);

@NgModule({
    declarations: [
        OlvidoContrasenaComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
        router
    ],
    providers: [
    ],
    bootstrap: [
        OlvidoContrasenaComponent
    ]
})
export class OlvidoContrasenaModule {

}
