import { Component, OnDestroy, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Post } from "./post.model";
import { PostService } from "./post.service";
import { Subscription } from "rxjs";

@Component( {
    selector: "app-root",
    templateUrl: "./app.component.html",
    styleUrls: [ "./app.component.css" ],
} )
export class AppComponent
    implements OnInit,
        OnDestroy {
    
    loadedPosts: Post[] = [];
    isFetching = false;
    error = null;
    private errorSubscription: Subscription;
    
    constructor( private http: HttpClient, private postsService: PostService ) {
    }
    
    ngOnInit() {
        this.errorSubscription = this.postsService.error.subscribe( errorMessage => {
            this.error = errorMessage;
        } );
        this.isFetching = true;
        this.postsService.fetchPosts()
            .subscribe(
                posts => {
                    this.loadedPosts = posts;
                    this.isFetching = false;
                },
                error => {
                    this.error = error.message;
                    this.isFetching = false;
                },
            );
    }
    
    ngOnDestroy() {
        this.errorSubscription.unsubscribe();
    }
    
    onCreatePost( postData: Post ) {
        this.postsService.createAndStorePost( postData.title, postData.content );
    }
    
    onFetchPosts() {
        this.isFetching = true;
        this.postsService.fetchPosts()
            .subscribe(
                posts => {
                    this.loadedPosts = posts;
                    this.isFetching = false;
                },
                error => {
                    this.error = error.error;
                    this.isFetching = false;
                },
            );
    }
    
    onClearPosts() {
        this.postsService.deletePosts()
            .subscribe( () => {
                this.loadedPosts = [];
            } );
    }
    
    onHandleError() {
        this.error = null;
    }
}
