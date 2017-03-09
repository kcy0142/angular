import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transclude-test',
  templateUrl: './transclude-test.component.html',
  styleUrls: ['./transclude-test.component.css']
})
export class TranscludeTestComponent implements OnInit {

  test:string;
  constructor() { this.test="s";}

  ngOnInit() {
  }

}
