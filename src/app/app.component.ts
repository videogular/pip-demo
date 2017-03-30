import { Component } from '@angular/core';

export interface ICamera {
    source: string;
    name: string;
}

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: [ './app.component.scss' ]
})
export class AppComponent {
    masterVideo: string = 'http://static.videogular.com/assets/videos/goal-1.mp4';

    selectedCamera: string = null;
    cameras: Array<ICamera> = [
        {source: 'http://static.videogular.com/assets/videos/goal-2.mp4', name: 'Cam 2'},
        {source: 'http://static.videogular.com/assets/videos/goal-3.mp4', name: 'Cam 3'},
        {source: 'http://static.videogular.com/assets/videos/goal-4.mp4', name: 'Cam 4'}
    ];

    constructor() {}

    onSelectCamera(camera: ICamera) {
        this.selectedCamera = camera.source;
    }
}
