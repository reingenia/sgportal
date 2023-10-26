import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from 'src/app/app.component';

const registroModule = () => import('src/app/modules/registro/registro.module').then((module) => module.RegistroModule);
const olvidocontrasenaModule = () => import('src/app/modules/olvidocontrasena/olvidocontrasena.module').then((module) => module.OlvidoContrasenaModule);
const iniciosesionModule = () => import('src/app/modules/iniciosesion/iniciosesion.module').then((module) => module.InicioSesionModule);

const routes: Routes = [
    {
        path: 'registro',
        redirectTo: 'registro',
        pathMatch: 'full'
    },
    {
        path: '',
        children: [
            {
                path: 'registro',
                loadChildren: registroModule
            },
            {
                path: 'olvidocontrasena',
                loadChildren: olvidocontrasenaModule
            },
            {
                path: 'iniciosesion',
                loadChildren: iniciosesionModule
            }
        ]
    }
];

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ],
    providers: [
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {

}
