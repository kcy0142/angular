import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';
import {AngularFire, FirebaseListObservable} from 'angularfire2';

import 'rxjs/add/operator/toPromise';

import { Hero } from './hero';


@Injectable()
export class Hero1Service {

private heroesUrl = 'api/heroes';  // URL to web api
private heroes1Url = 'api/heroes1';  // URL to web api

constructor(  private af: AngularFire) { }


  getHero(id: number): Promise <Hero>{
    return this.getHeroes()
      .then(heroes => heroes.find(hero => hero.id === id));
  }


  getHeroes(): Promise<Hero[]> {
    console.log("Hero1 Service Start.......");
    //this.af.database.list('/heros/');
      return this.af.database.list('/heros/')
                 .toPromise()
                 .then(response => response.json().data as Hero[])
                 .catch(this.handleError);

                 //this.af.database.list('/heros/').top
    }

    private handleError(error: any): Promise<any> {
      console.error('An error occurred', error); // for demo purposes only
      return Promise.reject(error.message || error);
    }



}
