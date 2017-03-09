import {Injectable} from '@angular/core';

import {Http} from '@angular/http';
import {Observable} from 'rxjs/Rx';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Post }           from './model/post';


@Injectable()
export class PostsService{
    constructor (private http:Http ){
        console.log("posts....");
    }

    getPosts_old(){
      console.log("getPosts service....");
        return this.http.get('https://jsonplaceholder.typicode.com/posts')
        .map(res1=>res1.json());
    }

    getPosts() : Observable<Post[]>{
      console.log("getPosts Observable service....");
        return this.http.get('https://jsonplaceholder.typicode.com/posts')
        .map(res1=>res1.json());
    }
}
