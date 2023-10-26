import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-registro',
    templateUrl: './registro.component.html',
    styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

    step: number = 1;

    constructor() {

    }

    ngOnInit() {

    }

    nextStep() {
       this.step++;

       if (this.step == 6) {
           this.step = 1;
       }
    }

}
