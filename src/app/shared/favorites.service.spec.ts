import { TestBed } from '@angular/core/testing';

import { FavoritesService } from './favorites.service';

describe('LocalStorageService', () => {
  let service: FavoritesService;
  let localStore: any;

  beforeEach(() => {
    localStore = {};

    spyOn(window.localStorage, 'getItem').and.callFake((key) =>
      key in localStore ? localStore[key] : null
    );
    spyOn(window.localStorage, 'setItem').and.callFake(
      (key, value) => (localStore[key] = value)
    );
    TestBed.configureTestingModule({});
    service = TestBed.inject(FavoritesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get favorites first time', () => {
    expect(service.get()).toEqual([]);

    service.remove('btc');
    expect(service.get()).toEqual([]);
  });

  it('should add btc to favorites and remove from it', () => {
    service.set('btc');
    expect(service.get()).toEqual(['btc']);

    service.remove('btc');
    expect(service.get()).toEqual([]);
  });
});