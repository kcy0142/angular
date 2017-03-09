import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';
import {AngularFire, FirebaseListObservable,FirebaseObjectObservable} from 'angularfire2';

import 'rxjs/add/operator/toPromise';
import {Observable} from 'rxjs/Rx';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Hero } from './hero';


@Injectable()
export class Hero1Service {

  private heroesUrl = 'api/heroes';  // URL to web api
  private heroes1Url = 'api/heroes1';  // URL to web api

  //firebase의 옵저버를 이용한 예
  private pmemos: FirebaseListObservable<any[]>;

  private pmemos3: FirebaseObjectObservable<any[]>;




  private pmemos1: Observable<any[]>;

  private pmemos2: Observable<any>;

  constructor(private af: AngularFire) { }

  // getHero(id: number): Promise <Hero>{
  //   return this.getHeroes()
  //     .then(heroes => heroes.find(hero => hero.id === id));
  // }
  //
  //
  // getHeroes() : Promise<Hero[]> {
  //   console.log("Hero Service Start.......");
  //     return Promise.resolve(HEROES);
  // }

  getHero(id: number): Observable<any> {
      console.log("Hero1 Service Observable getHero Start......."+id);
      let idd:string="1";
      this.pmemos3=this.af.database.object('/heros/'+idd);


        //     this.pmemos2=this.af.database.list('/heros', {
        //   query: {
        //   orderByChild: 'id',
        //   equalTo: '2''
        //   }
        // });

    console.log("Hero1 Service Observable getHero Startdddddddddddddddddd...this.pmemos2...."+this.pmemos3);
//let ref = this.af.database.ref().listToFirst(10);
    return this.pmemos3;
  }



  // constructor(private db: AngularFireDatabase) {
  //     db.list('/events', {
  //       query: {
  //         orderByChild: 'date',
  //         startAt: this.start$,
  //         endAt: this.end$
  //       }
  //     }).subscribe(events => {
  //       // update fullcalendar component with events
  //     });
  //   }


  // getHeroes(): Observable<Hero[]> {
  //   console.log("Hero Service Observable pmemos1 Start.......");
  //   //this.pmemos = this.af.database.list('/heros');
  //     this.pmemos1=this.af.database.list('/heros', {
  //       query: {
  //         //limitToLast: 1,
  //         orderBy: 'id',
  //         equalTo:'1'
  //       }
  //     });
  //
  //   return this.pmemos1;
  // }

  getHeroes(): Observable<Hero[]> {
    console.log("Hero Service Observable pmemos1 Start.......");
    //this.pmemos = this.af.database.list('/heros');
  // this.pmemos1=this.af.database.list('/heros');

        let idd:number = 2;

        this.pmemos1=this.af.database.list('/heros');

      //   this.pmemos1=this.af.database.list('/heros', {
      // query: {
      // orderByChild: 'id',
      // equalTo: '2'
      // }
      // });

//       this.pmemos1 = this.af.database.list('/heros',{
//   query: {
//     orderByChild: 'id',
//     equalTo: '2'
//   }
// }).map((items: Array<any>) => items.find(item => item.id === idd))


    return this.pmemos1;
  }

  getHeroes_3(): Observable<Hero[]> {
    console.log("Hero Service Observable Start.......");
    //this.pmemos = this.af.database.list('/heros');

    return this.af.database.list('/heros');
  }

  getHeroes_2() {
    console.log("Hero Service Start.......");
    this.pmemos = this.af.database.list('/heros');
    return this.pmemos;
  }


  getHeroes1() {
    console.log("Hero1  wwwwww Service Start.......");
    return this.af.database.list('/heros/').map(res => res.json());
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }



}
