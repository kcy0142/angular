import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'app-root',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
  items: FirebaseListObservable<any[]>;
  sizeSubject: Subject<any>;

  constructor(private af: AngularFire) {
    this.sizeSubject = new Subject();
  }


  filterBy(size: string) {
    this.sizeSubject.next(size);
    this._setPriorityItemList(size);
  }

  ngOnInit() {
    console.log("items ngOnInit start........");
    this._setPriorityItemList('all');
  }

  private _setPriorityItemList(filter: string): void {

    console.log("_setPriorityItemList filter value:" + filter);
    if (filter == "all") {
      this.items = this.af.database.list('/items/');
    } else {
      this.items = this.af.database.list('/items', {
        query: {
          orderByChild: 'size',
          //equalTo: 'large'
          //equalTo: this.sizeSubject
          equalTo: filter
        }
      });
    }
  }

}
