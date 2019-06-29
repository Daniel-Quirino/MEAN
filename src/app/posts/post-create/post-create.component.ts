import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-post-create",
  templateUrl: "./post-create.component.html"
})
export class PostCreateComponent {
  constructor() {}

  enteredValue = "";
  newPost = '';

  onAddPost() {
    this.newPost = this.enteredValue;
  }
    
}

