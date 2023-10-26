import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-olvidocontrasena',
    templateUrl: './olvidocontrasena.component.html',
    styleUrls: ['./olvidocontrasena.component.css']
})
export class OlvidoContrasenaComponent implements OnInit {

    step: number = 1;

    constructor() {

    }

    ngOnInit() {

    }

    nextStep() {
        this.step++;

        if (this.step == 4) {
            this.step = 1;
        }
    }

}
