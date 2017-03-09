import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http';
@Component({
  selector: 'app-post1',
  templateUrl: './post1.component.html',
  styleUrls: ['./post1.component.css']
})
export class Post1Component implements OnInit {

  posts: Post[];

  constructor(private http: Http) {
    console.log("post1component constructor 1...........");
    this.http.get('https://jsonplaceholder.typicode.com/posts').
      map(res => res.json()).subscribe(posts => {
        this.posts = posts;
      })

    /*
    this.posts = [{
      id: 1,
      title: 'title1',
      body: 'body1'
    },
      {
        id: 2,
        title: 'title2',
        body: 'body2'
      }
    ]
    */

  }

  ngOnInit() {
    console.log("post1 component ngOnInit...........");
  }

}

interface Post {
  id: number;
  title: string;
  body: string;

}
