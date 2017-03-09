import { Component, OnInit } from '@angular/core';


import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'app-item2',
  templateUrl: './item2.component.html',
  styleUrls: ['./item2.component.css']
})
export class Item2Component implements OnInit {

  items: FirebaseListObservable<any[]>;
    sizeSubject: Subject<any>;

    constructor(af: AngularFire) {
      this.sizeSubject = new Subject();
      this.items = af.database.list('/items', {
        query: {
          orderByChild: 'size',
          equalTo: this.sizeSubject
        }
      });
    }
    filterBy(size: string) {
      this.sizeSubject.next(size);
    }

    ngOnInit() {
    }

}
