import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { NewMemoComponent } from './new-memo/new-memo.component';
import { ShowMemoComponent } from './show-memo/show-memo.component';
import { IntroMemoComponent } from './intro-memo/intro-memo.component';


@NgModule({
    imports: [
        FormsModule,
        BrowserModule
    ],
    exports: [
        NewMemoComponent,
        ShowMemoComponent,
        FormsModule,
        BrowserModule
    ],
    declarations: [
        NewMemoComponent,
        ShowMemoComponent,
        IntroMemoComponent
    ],
    bootstrap: [IntroMemoComponent]
})

export class PagesModule { }
