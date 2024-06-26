import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { SharedModule } from "./shared/shared.module";
import { WelcomeComponent } from "./welcome/welcome.component";
import { RouterLink } from "@angular/router";
import { DetailsComponent } from "./welcome/details/details.component";
import { AppRoutingModule } from "./app.routes";


@NgModule( {
    declarations: [
        AppComponent,
        WelcomeComponent,
    ],
    imports: [
        BrowserModule,
        SharedModule,
        RouterLink,
        AppRoutingModule,
        DetailsComponent,
    ],
    providers: [],
    bootstrap: [ AppComponent ],
} )
export class AppModule {}
