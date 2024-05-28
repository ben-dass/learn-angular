import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { Store } from "@ngrx/store";
import { init } from "./store/counter.actions";


@Component( {
    selector: "app-root",
    templateUrl: "./app.component.html",
    styleUrl: "./app.component.css",
    encapsulation: ViewEncapsulation.None,
} )
export class AppComponent
    implements OnInit {
    
    constructor( private store: Store ) {}
    
    
    ngOnInit() {
        this.store.dispatch( init() );
    }
}
