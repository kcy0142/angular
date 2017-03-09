import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Hero } from '../hero';

import { Hero1Service } from '../hero1.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes1.component.html',
  styleUrls: ['./heroes1.component.css']
})
export class Heroes1Component implements OnInit {

  constructor(
    private hero1service: Hero1Service,
    private _router: Router
  ) { }



  title = 'Tour of Heroes';
  heroes: Hero[];
  selectedHero: Hero;

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  gotoDetail(): void {
    this._router.navigate(['/detailFb', this.selectedHero.id]);
  }

gotoAdd

  // constructor(private http: Http) {
  //   console.log("post1component constructor 1...........");
  //   this.http.get('https://jsonplaceholder.typicode.com/posts').
  //     map(res => res.json()).subscribe(result => {
  //       this.heroes = result;
  //     })

  // this.postsService.getPosts().subscribe(posts => {
  //   this.posts = posts;
  //
  // })
  //

  // console.log("post1component constructor 1...........");
  //  this.http.get('https://jsonplaceholder.typicode.com/posts').
  //    map(res => res.json()).subscribe(posts => {
  //      this.posts = posts;
  //    })
  //


  ngOnInit(): void {
    this.hero1service.getHeroes().subscribe(heroes => {

       console.log("heroes Start......."+heroes.values);
      this.heroes=heroes;
    })

  }

  // ngOnInit(): void {
  //   this.hero1service.getHeroes()
  //     .then(result => this.heroes = result);
  // }


}
