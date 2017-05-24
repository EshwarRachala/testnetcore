import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UniversalModule } from 'angular2-universal';

import { ChartModule, ChartService } from 'ngnvd3';
import { AppComponent } from './containers/app/app.component';

@NgModule({
    bootstrap: [AppComponent],
    declarations: [
        AppComponent,
    ],
    imports: [
        ChartModule,
        UniversalModule, 
    ]
})
export class AppModule {
}
