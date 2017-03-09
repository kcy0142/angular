/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Heroes1Component } from './heroes1.component';

describe('Heroes1Component', () => {
  let component: Heroes1Component;
  let fixture: ComponentFixture<Heroes1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Heroes1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Heroes1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
