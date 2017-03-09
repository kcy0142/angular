import { Component, OnInit } from '@angular/core';
import { AngularFire } from 'angularfire2';

@Component({
  selector: 'app-intro-memo',
  templateUrl: './intro-memo.component.html',
  styleUrls: ['./intro-memo.component.css']
})
export class IntroMemoComponent implements OnInit {

  isLogin: boolean = false;
  	constructor(
  		private af: AngularFire
  	) {
  		af.auth.subscribe(auth => {
  			console.log(auth);
  			if (auth.uid !== undefined){
  				this.isLogin = true;
  			}
  			else {
  				this.login();
  			}
  		});
  	}
  	ngOnInit(){
  	}
  	login(): void {
  		this.af.auth.login();
  	}
  	logout(): void {
  		this.af.auth.logout();
  		this.isLogin = false;
  	}
  }
