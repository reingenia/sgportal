import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { Routes, RouterModule } from '@angular/router';

import { SharedModule } from 'src/app/shared/shared.module';

import { InicioSesionComponent } from 'src/app/modules/iniciosesion/components/iniciosesion/iniciosesion.component';

const routes: Routes = [
    {
        path: '',
        component: InicioSesionComponent
    }
];

export const router: ModuleWithProviders<RouterModule> = RouterModule.forChild(routes);

@NgModule({
    declarations: [
        InicioSesionComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
        router
    ],
    providers: [
    ],
    bootstrap: [
        InicioSesionComponent
    ]
})
export class InicioSesionModule {

}
