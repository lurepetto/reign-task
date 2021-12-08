import { TestBed } from '@angular/core/testing';

import { FavoriteNewsService } from './favorite-news.service';

describe('FavoriteNewsService', () => {
  let service: FavoriteNewsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FavoriteNewsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
