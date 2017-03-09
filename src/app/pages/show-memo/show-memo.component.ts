//import { Observable } from '@angular-cli/ast-tools/node_modules/rxjs/Rx';
import { Component, ElementRef, OnInit } from '@angular/core';
import {AngularFire, FirebaseListObservable} from 'angularfire2';

@Component({
    selector: 'show-memo',
    templateUrl: 'show-memo.component.html',
    styleUrls: ['show-memo.component.css']
})
export class ShowMemoComponent implements OnInit {
    pmemos$: FirebaseListObservable<any[]>;
    pmemos: Array<any> = [];
    selectedMemo: any;
    memoKey: string;
    Priority: Array<string> = ['A', 'B', 'C'];
    user_uid:string;
    constructor(
        private af: AngularFire,
        private el: ElementRef
    ) {
        af.auth.subscribe(auth => {
			this.user_uid = auth.uid;
		});
    }
    ngOnInit() {
        this._setPriorityMemoList();
    }
    private _setPriorityMemoList(): void {
        this.pmemos$ = this.af.database.list('/pmemos/' + this.user_uid);
        this.pmemos$.subscribe(data => {
            this.pmemos = data;
        })
    }
    delete(key: string): void {
        this.pmemos$.remove(key);
    }
    edit(oMemo: any, key: string): void {
        this.selectedMemo = oMemo;
        this.memoKey = key;
      //  $('#'+this.memoKey).show();
    }
    updateMemo(): void {
        if (this.selectedMemo.title === '' || this.selectedMemo.contents === '') {
            alert('no title or contents');
            return;
        }
        const memo_obj = {
            title: this.selectedMemo.title,
            type : this.selectedMemo.type,
            contents : this.selectedMemo.contents,
            update_date : new Date().getTime()
        }
        this.pmemos$.update(this.memoKey, memo_obj);
        this.cancelUpdate();
    }
    cancelUpdate(): void {
      //  $('#'+this.memoKey).hide();
        this.selectedMemo = null;
        this.memoKey = null;
    }
}
