import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-iniciosesion',
    templateUrl: './iniciosesion.component.html',
    styleUrls: ['./iniciosesion.component.css']
})
export class InicioSesionComponent implements OnInit {

    constructor(private _router: Router) {

    }

    ngOnInit() {

    }

    navigateToLostPassword() {
        this._router.navigateByUrl('/olvidocontrasena')
    }

}
