import { TestBed } from '@angular/core/testing';

import { MovieSaveService } from './movie-save.service';

describe('MovieSaveService', () => {
  let service: MovieSaveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MovieSaveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
