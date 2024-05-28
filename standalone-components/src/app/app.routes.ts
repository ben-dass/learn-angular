import {
    PreloadAllModules,
    RouterModule,
    Routes,
} from "@angular/router";
import { NgModule } from "@angular/core";


const appRoutes: Routes = [];


@NgModule( {
    imports: [
        RouterModule.forRoot(
            appRoutes,
            {
                preloadingStrategy: PreloadAllModules,
            },
        ),
    ],
    exports: [ RouterModule ],
} )
export class AppRoutingModule {}

