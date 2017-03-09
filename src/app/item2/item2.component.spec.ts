/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Item2Component } from './item2.component';

describe('Item2Component', () => {
  let component: Item2Component;
  let fixture: ComponentFixture<Item2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Item2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Item2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
