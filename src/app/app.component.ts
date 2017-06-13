import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Post } from './post.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  newPostClicked: boolean = false;
  masterPostList: Post[];

  addPost(newPostFromChild: Post) {
    this.masterPostList.push(newPostFromChild);
  }

  newPostButtonClicked() {
    this.showNewPostForm();
  }

  showNewPostForm() {
    this.newPostClicked = true;
  }

  hideNewPostForm() {
    this.newPostClicked = false;
  }

}
