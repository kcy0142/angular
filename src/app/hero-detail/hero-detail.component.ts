import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { Hero1Service } from '../hero1.service';

import 'rxjs/add/operator/switchMap';



@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']

})

export class HeroDetailComponent implements OnInit {

  @Input()
  hero: Hero;

  constructor(
    private _heroService: HeroService,
    private _hero1Service: Hero1Service,
    private _route: ActivatedRoute,
    private _location: Location
  ) { }

  goBack(): void {
    this._location.back();
  }


  ngOnInit(): void {

    // 로직부분을 보면 생성자에 heroService 와 ActivatedRoute, 그리고 location 에 관한 서비스를
    // 사용하도록 명시 해두고,  ngOnInit 부분에서는 Rxjs 를 사용하여 heroService 의 getHero 메소드를
    // 사용하여 얻어온 데이터를 현재 Hero 변수에 삽입하고 있습니다.

    // 설명을 하자면 this._route.params  이 부분은 Angular 에서 만든 ActivatedRoute 모듈의
    // params 기능을 사용하여 현재 경로의 매개변수를 탐색하여 Params 형식의 Observable
    // 을 리턴하는 부분입니다.


    //Observable => 데이터 흐름 => Subscribe()
    //출처: http://alexband.tistory.com/48 [knowledge is power]

    let pathString = this._route.snapshot.url[0].path;
    let pathString1 = this._route.snapshot.url[0];

    let id = this._route.snapshot.params['id'];
    let id1 = this._route.snapshot.url[1];
    let id2 = this._route.snapshot.url[1].path;



    console.log("pathString:" + pathString);
    console.log("pathString1:" + pathString1);
    console.log("id:" + id);
    console.log("id1:" + id1);
    console.log("id2:" + id2);

    
    // this._route.params
    //  .switchMap((params: Params) =>{
    //    console.log("Got params??");
    //    console.log(params);
    //    // params['filename'])
    //    return 'cat';
    //  })
    //  .subscribe(data=>{
    //    console.log(data);
    //  })


    // this.hero1service.getHeroes().subscribe(heroes => {
    //
    //    console.log("heroes Start......."+heroes.values);
    //   this.heroes=heroes;
    // })


    this._route.params
      .switchMap((params: Params) => {
        if (pathString == "detail") {
          console.log("call detail service from local data");
          return this._heroService.getHero(+params['id']);
        } else if (pathString == "detailFb") {
          console.log("call detail service from firebase data");
          return this._hero1Service.getHero(+params['id']);
        }
      })
      .subscribe(hero => this.hero = hero);


    // Original source
    // this._route.params
    //   .switchMap((params: Params) =>
    //     this._heroService.getHero(+params['id']))
    //   .subscribe(hero => this.hero = hero);
  }

}
