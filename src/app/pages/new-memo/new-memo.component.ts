import { Component, OnInit } from '@angular/core';
import {AngularFire, FirebaseListObservable} from 'angularfire2';

@Component({
    selector: 'new-memo',
    templateUrl: 'new-memo.component.html',
    styleUrls: ['new-memo.component.css']
})
export class NewMemoComponent implements OnInit {

    Priority: Array<string> = ['A', 'B', 'C'];
    selectedType: string;
    prioritymemo_text: string;
    prioritymemo_title: string;
    user_uid:string;
    constructor(
        private af: AngularFire
    ) {
        this.selectedType = 'A';
        this.prioritymemo_text = '';
        this.prioritymemo_title = '';
        af.auth.subscribe(auth => {
			this.user_uid = auth.uid;
		});
    }
    ngOnInit() { }

    insertNewMemo() {
        if (this.prioritymemo_text === '' || this.prioritymemo_title === ''){
            alert('no title or contents');
            return;
        }

        const memo_obj = {
            title: this.prioritymemo_title,
            contents: this.prioritymemo_text,
            type: this.selectedType,
            create_date : new Date().getTime()
        }
        const memoObservable = this.af.database.list('/pmemos/'+this.user_uid);
        memoObservable.push(memo_obj);
        //initialize
        this.prioritymemo_text = '';
        this.prioritymemo_title = '';
        this.selectedType = 'A';
    }
}
