import { BrowserModule } from '@angular/platform-browser';
import { NgModule,NO_ERRORS_SCHEMA} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';


import { AngularFireModule } from 'angularfire2';

// firebase config
import { FirebaseAppConfig, myFirebaseAppAuthConfig } from './firebase.app.config';


// Imports for loading & configuring the in-memory web api
//import { InMemoryWebApiModule } from 'angular2-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data-service.service';


import { AppComponent } from './app.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';

import { HeroService } from './hero.service';
import { Hero1Service } from './hero1.service';
import {PostsService} from './post.service';
import { ModalService } from './modal/modal.service';

import { HeroesComponent } from './heroes/heroes.component';
import { DashboardComponent } from './dashboard/dashboard.component';


import { PostComponent } from './post/post.component';
import { Post1Component } from './post1/post1.component';
import { Heroes1Component } from './heroes1/heroes1.component';
import { HeroAddComponent } from './hero-add/hero-add.component';
import { ItemsComponent } from './items/items.component';
import { Item2Component } from './item2/item2.component';
import { MessagesComponent } from './messages/messages.component';


//memo property
// import { NewMemoComponent } from './pages/new-memo/new-memo.component';
// import { ShowMemoComponent } from './pages/show-memo/show-memo.component';
// import { IntroMemoComponent } from './pages/intro-memo/intro-memo.component';


// custom module
//import { PagesModule } from './pages/pages.module';
import { JqueryComponent } from './jquery/jquery.component';

import { AppRoutingModule } from './app.routing.module';
import { TranscludeTestComponent } from './transclude-test/transclude-test.component';
import { CardIntroComponent } from './card-intro/card-intro.component';
import { CardComponent } from './card/card.component';
import { ModalComponent } from './modal/modal.component';
import { FeedCardComponent } from './feed-card/feed-card.component';
import { StripHtmlTagsPipe } from './pipe/strip-html-tags.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeroDetailComponent,
    HeroesComponent,
    DashboardComponent,
    PostComponent,
    Post1Component,
    Heroes1Component,
    HeroAddComponent,
    ItemsComponent,
    Item2Component,
    MessagesComponent,
    //AlertTestComponent,
  //  ShowMemoComponent,
  //  NewMemoComponent,
  //  IntroMemoComponent,
    JqueryComponent,
    TranscludeTestComponent,
    CardComponent,
    CardIntroComponent,
    ModalComponent,
    FeedCardComponent,
    StripHtmlTagsPipe

  //  CardMainComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
  //  InMemoryWebApiModule.forRoot(InMemoryDataService),
    AngularFireModule.initializeApp(FirebaseAppConfig,myFirebaseAppAuthConfig),
    AppRoutingModule
  //  PagesModule
  ],
  providers: [
    HeroService,
    Hero1Service,
    PostsService,
    ModalService
  ],
  schemas:      [ NO_ERRORS_SCHEMA ],
  bootstrap: [AppComponent]

  //bootstrap: [CardIntroComponent]
  //bootstrap: [TranscludeTestComponent]



})
export class AppModule { }
