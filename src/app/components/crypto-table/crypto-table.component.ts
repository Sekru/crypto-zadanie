import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { Subject, combineLatest, map, takeUntil } from 'rxjs';
import { FavoritesService } from 'src/app/shared/favorites.service';
import { loadCrypto } from 'src/app/state/crypto/crypto.actions';
import { selectCryptocurrencies } from 'src/app/state/crypto/crypto.selectors';

@Component({
  selector: 'app-crypto-table',
  templateUrl: './crypto-table.component.html',
  styleUrls: ['./crypto-table.component.scss']
})
export class CryptoTableComponent implements OnInit, OnDestroy {
  public dataSource: MatTableDataSource<any> = new MatTableDataSource();
  private destroyed$ = new Subject();

  public displayedColumns: string[] = ['favorite', 'symbol', 'name', 'price', 'percent_change_1h', 'percent_change_24h', 'percent_change_7d', 'market_cap', 'volume_24h', 'circulating_supply'];
  public isLoading = true;
  constructor(
    private store: Store,
    private router: Router,
    private favoritesService: FavoritesService,
  ) { }

  @ViewChild(MatPaginator, {static: false}) paginator!: MatPaginator;

  ngOnInit(): void {
    combineLatest([
      this.favoritesService.getFavorites$,
      this.store.pipe(select(selectCryptocurrencies)),
    ]).pipe(
      map(([favorites, data]) => data.map(e => ({...e, isFavorite: favorites.includes(e.id)}))),
      takeUntil(this.destroyed$),
    ).subscribe((data) => {
      this.dataSource.data = [...data];
      this.dataSource.paginator = this.paginator;
      this.isLoading = false;
    });

    this.favoritesService.loadFavorites();
    this.store.dispatch(loadCrypto());
  }

  ngOnDestroy(): void {
    this.destroyed$.next(null);
  }
  
  getIconUrl(symbol: string): string {
    return `assets/icon/${symbol.toLowerCase()}.png`;
  }

  navigateTo(id: string) {
    this.router.navigate(['/cryptocurrencies', id]);
  }

  addToFavorites(id: string) {
    this.favoritesService.set(id);
  }

  removeFromFavorites(id: string) {
    this.favoritesService.remove(id);
  }
}
