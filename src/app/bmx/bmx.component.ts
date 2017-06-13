import { Component, OnInit } from '@angular/core';
import { Post } from './../post.model';
import { PostService } from './../post.service';

@Component({
  selector: 'app-bmx',
  templateUrl: './bmx.component.html',
  styleUrls: ['./bmx.component.css'],
  providers: [PostService]
})

export class BmxComponent implements OnInit {
  posts: Post[];

  constructor(private postService: PostService) { }

  ngOnInit() {
    this.posts = this.postService.getPosts();
  }

}
