import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { PostComponent } from './post/post.component';
import { Post1Component } from './post1/post1.component';
import { Heroes1Component } from './heroes1/heroes1.component';


import { ItemsComponent } from './items/items.component';
import { Item2Component } from './item2/item2.component';
import { MessagesComponent } from './messages/messages.component';

import { IntroMemoComponent } from './pages/intro-memo/intro-memo.component';
import { JqueryComponent } from './jquery/jquery.component';

import { TranscludeTestComponent } from './transclude-test/transclude-test.component';

import { CardIntroComponent } from './card-intro/card-intro.component';
import { CardComponent } from './card/card.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: HeroDetailComponent },
  { path: 'detailFb/:id', component: HeroDetailComponent },
  { path: 'heroes', component: HeroesComponent },
  { path: 'heroes1', component: Heroes1Component },
  { path: 'post', component: PostComponent },
  { path: 'post1', component: Post1Component },
  { path: 'item', component: ItemsComponent },
  { path: 'item2', component: Item2Component },
  { path: 'message', component: MessagesComponent },
//  { path: 'memo', component: IntroMemoComponent },
  { path: 'jqueryDemo', component: JqueryComponent },
  { path: 'transCludeDemo', component: TranscludeTestComponent },
  { path: 'card', component: CardIntroComponent }

];

@NgModule({

  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
