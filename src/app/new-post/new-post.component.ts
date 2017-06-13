import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Post } from '../post.model';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent implements OnInit {
  @Input() newPostFormClicked: boolean;
  @Output() newPostSender = new EventEmitter();
  @Output() doneWithNewPostFormClickedSender = new EventEmitter();

  submitForm(title: string, body: string, imgUrl: string, score: number, id: number, category: string) {
    var newPostToAdd: Post = new Post(title, body, imgUrl, score, id, category);
    this.newPostSender.emit(newPostToAdd);
  }

  doneWithNewPostFormClicked() {
    this.doneWithNewPostFormClickedSender.emit();
  }

  constructor() { }

  ngOnInit() {
  }

}
