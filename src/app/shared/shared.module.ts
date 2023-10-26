import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { Routes, RouterModule } from '@angular/router';

import { HeaderComponent } from 'src/app/shared/components/header/header.component';

@NgModule({
    declarations: [
        HeaderComponent
    ],
    imports: [

    ],
    exports: [
        HeaderComponent
    ]
})
export class SharedModule {

}
