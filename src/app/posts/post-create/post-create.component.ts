import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-post-create",
  templateUrl: "./post-create.component.html"
})
export class PostCreateComponent {
  enteredTitle = "";
  enteredContent = "";

  constructor() {}

  onAddPost(form: NgForm) {
    if (form.invalid) {
      return;
    }
    
  }
}
