import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { VgCoreModule } from 'videogular2/core';
import { VgControlsModule } from 'videogular2/controls';
import { VgPipComponent } from './vg-pip/vg-pip.component';

@NgModule({
    declarations: [
        AppComponent,
        VgPipComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        VgCoreModule,
        VgControlsModule
    ],
    providers: [],
    bootstrap: [ AppComponent ]
})
export class AppModule {
}
