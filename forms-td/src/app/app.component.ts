import { Component, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";

@Component( {
    selector: "app-root",
    templateUrl: "./app.component.html",
    styleUrls: [ "./app.component.css" ],
} )
export class AppComponent {
    
    @ViewChild( "f" ) signupForm: NgForm;
    defaultQuestion = "pet";
    answer = "";
    genders = [
        "Male",
        "Female",
    ];
    user = {
        username: "",
        email: "",
        secretQuestion: "",
        answer: "",
        gender: "",
    };
    
    suggestUserName() {
        const suggestedName = "Superuser";
        this.signupForm.form.patchValue( {
            userData: {
                username: suggestedName,
            },
        } );
    }
    
    onSubmit( form: NgForm ) {
        this.user.username = this.signupForm.value.userData.username;
        this.user.email = this.signupForm.value.userData.email;
        this.user.secretQuestion = this.signupForm.value.secret;
        this.user.answer = this.signupForm.value.questionAn;
        this.user.gender = this.signupForm.value.gender;
    }
}
