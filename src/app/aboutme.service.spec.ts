import { TestBed, inject } from '@angular/core/testing';

import { AboutmeService } from './aboutme.service';

describe('AboutmeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AboutmeService]
    });
  });

  it('should be created', inject([AboutmeService], (service: AboutmeService) => {
    expect(service).toBeTruthy();
  }));
});
