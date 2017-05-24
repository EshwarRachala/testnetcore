import { ContentComponent } from './containers/content/content.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UniversalModule } from 'angular2-universal';

import { ChartModule, ChartService } from 'ngnvd3';
import { AppComponent } from './containers/app/app.component';
import { NavigationComponent } from './containers/navigation/navigation.component';

@NgModule({
    bootstrap: [AppComponent],
    declarations: [
        AppComponent,
        NavigationComponent,
        ContentComponent
    ],
    imports: [
        ChartModule,
        UniversalModule, 
    ]
})
export class AppModule {
}
