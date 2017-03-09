import { Component, OnInit, Input, Output  } from '@angular/core';

@Component({
  selector: 'cardProcess',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

//  @Input() header: string = 'this is header';
//      @Input() footer: string = 'this is footer';
      stepIndex:string;
      selectedIndex:string;
      stepIndex1:string;
      stepIndex2:string;
      stepIndex3:string;
      stepIndex4:string;


  constructor() {
    this.stepIndex1="ok";
      this.stepIndex2="";
  //console.log("  this.stepIndex1:"+  this.stepIndex1);
//  console.log("  this.stepIndex2:"+  this.stepIndex2);
  }

  ngOnInit() {
//console.log("  this.stepIndex1:");
  }

  showStep(step) {
      console.log("step check:"+step);
      if(step=='1'){
        this.stepIndex1="go";
        this.stepIndex2="";
        this.stepIndex3="";
        this.stepIndex4="";
      }else if(step=='2'){
        this.stepIndex1="";
        this.stepIndex2="go";
        this.stepIndex3="";
        this.stepIndex4="";
      }else if(step=='3'){
        this.stepIndex1="";
        this.stepIndex2="";
        this.stepIndex3="go";
        this.stepIndex4="";

      }else if(step=='4'){
        this.stepIndex1="";
        this.stepIndex2="";
        this.stepIndex3="";
        this.stepIndex4="go";
      }
  }


}
