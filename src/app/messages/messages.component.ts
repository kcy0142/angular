import { Component,ViewChild, OnInit  } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';

//import { AlertTestComponent } from '../alert-test/alert-test.component';

import { ModalService } from '../modal/modal.service';
import { ModalComponent } from '../modal/modal.component';

//import { ModalComponent, ModalService } from '../modal/';


@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})



export class MessagesComponent implements OnInit {
  message: FirebaseListObservable<any>;
  No : number;
  private MODAL_DEMO_ID: string;

//  @ViewChild(AlertTestComponent) alertView: AlertTestComponent;

  constructor(af: AngularFire,private modalService: ModalService) {
    this.message = af.database.list('/messages');
    this.message.map(list=>list.length).subscribe(length=>{this.No=length;console.log(length)});
    this.MODAL_DEMO_ID = 'test';


    //.map(list=>list.length).subscribe(length=>console.log(length));
    //this.id_no=af.database.list('/messages/id').find;
      console.log("message size:"+this.No);
  }

  addItem(newName: string) {
    console.log("addItem next id number is:"+(this.No+1));
    let nextId:number=(this.No+1);
    if(nextId>5){
        console.log("you can't add");
        // this.alertView.show();
          this.modalService.open(this.MODAL_DEMO_ID);
    }else{
        console.log("you can add");
        this.message.push({ id:nextId,text: newName }).then((message) => { console.log("message key:"+message.key); });

    }

  }
  updateItem(key: string, newText: string) {
    this.message.update(key, { text: newText });
  }
  updateItemById(id: string, newText: string) {
      console.log("updateItemById id number is:"+id);
    this.message.update(id, { text: newText });
  }



  deleteItem(key: string) {
    this.message.remove(key).then(_ => console.log('message deleted!'));
  }
  deleteEverything() {
    this.message.remove();
  }

  showModal() {
    this.modalService.open(this.MODAL_DEMO_ID);
   }

   closeModal() {
     this.modalService.close(this.MODAL_DEMO_ID);
    }

   doTheThing(){

   }

  ngOnInit() {
  }

}
