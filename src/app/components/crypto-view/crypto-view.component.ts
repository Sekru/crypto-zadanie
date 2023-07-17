import { Component } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CryptoCurrency } from 'src/app/models/crypto.interface';
import { loadSingleCrypto } from 'src/app/state/crypto/crypto.actions';
import { selectCryptocurrency } from 'src/app/state/crypto/crypto.selectors';

@Component({
  selector: 'app-crypto-view',
  templateUrl: './crypto-view.component.html',
  styleUrls: ['./crypto-view.component.scss']
})
export class CryptoViewComponent {
  public cryptocurrency$!: Observable<CryptoCurrency | null>;

  constructor(private store: Store, private route: ActivatedRoute) {}
  ngOnInit(): void {
    this.store.dispatch(loadSingleCrypto({ id: this.route.snapshot.paramMap.get('id') }));
    this.cryptocurrency$ = this.store.pipe(select(selectCryptocurrency));
  }

  getIconUrl(symbol: string): string {
    return `assets/icon/${symbol.toLowerCase()}.png`;
  }
}
