import { Component, OnInit } from '@angular/core';
import { Post } from './../post.model';
import { PostService } from './../post.service';

@Component({
  selector: 'app-skate',
  templateUrl: './skate.component.html',
  styleUrls: ['./skate.component.css'],
  providers: [PostService]
})

export class SkateComponent implements OnInit {
  posts: Post[];

  constructor(private postService: PostService) { }

  ngOnInit() {
    this.posts = this.postService.getPosts();
  }

}
