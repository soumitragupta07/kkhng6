import { TestBed, inject } from '@angular/core/testing';

import { FooddataService } from './fooddata.service';

describe('FooddataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FooddataService]
    });
  });

  it('should be created', inject([FooddataService], (service: FooddataService) => {
    expect(service).toBeTruthy();
  }));
});
