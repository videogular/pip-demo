import { Component, Input, ViewChild, Output, EventEmitter, ElementRef } from '@angular/core';

@Component({
    selector: 'vg-pip',
    templateUrl: './vg-pip.component.html',
    styleUrls: [ './vg-pip.component.scss' ]
})
export class VgPipComponent {
    @Input() source: string;

    @Output() onCloseCam: EventEmitter<any> = new EventEmitter();

    constructor() {
    }

    onClickCam() {
        this.onCloseCam.next();
    }
}
