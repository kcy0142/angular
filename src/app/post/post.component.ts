import { Component, OnInit } from '@angular/core';
import {PostsService} from '../post.service';
import { Post }           from '../model/post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  constructor(private postsService: PostsService) { }

  posts: Post[];

  loadPosts() {
    this.postsService.getPosts().subscribe(posts => {
      this.posts = posts;
    });
  }

  ngOnInit() {
    // Load comments
    console.log("ngon init.....");
    this.loadPosts()
  }


  // constructor(private postsService: PostsService) {
  //
  //   this.postsService.getPosts().subscribe(posts => {
  //     this.posts = posts;
  //
  //   })
  //
  //
  // }
}
