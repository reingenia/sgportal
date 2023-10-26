import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

    constructor(private _router: Router) {

    }

    ngOnInit() {

    }

    navigateToLogin() {
        this._router.navigateByUrl('/iniciosesion')
    }

    navigateToRegister() {
        this._router.navigateByUrl('/registro')
    }

}
