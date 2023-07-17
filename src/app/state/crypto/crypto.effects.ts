/*Copyright (c) 2021 Retresco GmbH <support@retresco.de>*/

import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, concatMap, map, tap } from 'rxjs/operators';
import { loadCrypto, loadCryptoFailure, loadCryptoSuccess, loadSingleCrypto, loadSingleCryptoFailure, loadSingleCryptoSuccess } from './crypto.actions';
import { HttpClient } from '@angular/common/http';
import { of, throwError } from 'rxjs';
import { CryptoCurrency } from 'src/app/models/crypto.interface';
import { Router } from '@angular/router';

@Injectable()
export class CryptoEffects {
    loadCrypto$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(loadCrypto),
            concatMap(() => this.http.get('../assets/tickers.json').pipe(
                map((data: any) => loadCryptoSuccess({ data })),
                catchError(error => of(loadCryptoFailure({ error }))),
            ))
        );
    });

    loadSingleCrypto$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(loadSingleCrypto),
            concatMap(({ id }) => this.http.get('../assets/tickers.json').pipe(
                map((data: any) => data.find((e: CryptoCurrency) => e.id === id)),
                tap(data => !data ? this.router.navigate(['/']) : null),
                map((data: CryptoCurrency) => loadSingleCryptoSuccess({ data })),
                catchError(error => of(loadSingleCryptoFailure({ error }))),
            ))
        );
    });

    constructor(
        private readonly actions$: Actions,
        private readonly http: HttpClient,
        private readonly router: Router,
    ) { }
}
