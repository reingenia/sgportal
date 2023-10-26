import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { Routes, RouterModule } from '@angular/router';

import { SharedModule } from 'src/app/shared/shared.module';

import { RegistroComponent } from 'src/app/modules/registro/components/registro/registro.component';

const routes: Routes = [
    {
        path: '',
        component: RegistroComponent
    }
];

export const registroRouter: ModuleWithProviders<RouterModule> = RouterModule.forChild(routes);

@NgModule({
    declarations: [
        RegistroComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
        registroRouter
    ],
    providers: [
    ],
    bootstrap: [
        RegistroComponent
    ]
})
export class RegistroModule {

}
