import { Component, OnInit, Renderer } from '@angular/core';
import { ViewChild, ElementRef, AfterViewInit } from '@angular/core';

//import * as jQuery from 'jquery';

//import * as $ from 'jquery';
@Component({
  selector: 'my-app',
  templateUrl: './jquery.component.html',
  styleUrls: ['./jquery.component.css']
})
//declare var jQuery:any;



export class JqueryComponent implements AfterViewInit {




  @ViewChild('someVar') someVar: ElementRef;
  // let todo = new Todo({
  //   title: 'Read SitePoint article',
  //   note: 'aaa'
  // });
  taskNote1: string;
  name: string;
//  mytext:string;
  num = 0;
  increment() {
    this.num++;
  }
  todo: Todo;

  constructor(private renderer: Renderer) {
     this.taskNote1 = "text1";
     this.name = "test";

     this.todo = {
           id: 1,
           title: 'title1',
           body: 'body1'
         };
}


  ngAfterViewInit() {
    this.renderer.invokeElementMethod(this.someVar.nativeElement, 'focus');

  }
  updateNote() {
    console.log("updateNote......");
  }

  updateNote1() {
    console.log("updateNote1......");
  }

}

interface Todo {
  id: number;
  title: string;
  body: string;

}
