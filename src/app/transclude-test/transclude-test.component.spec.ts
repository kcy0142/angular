import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TranscludeTestComponent } from './transclude-test.component';

describe('TranscludeTestComponent', () => {
  let component: TranscludeTestComponent;
  let fixture: ComponentFixture<TranscludeTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TranscludeTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TranscludeTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
