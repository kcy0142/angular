/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { Hero1Service } from './hero1.service';

describe('Hero1Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Hero1Service]
    });
  });

  it('should ...', inject([Hero1Service], (service: Hero1Service) => {
    expect(service).toBeTruthy();
  }));
});
