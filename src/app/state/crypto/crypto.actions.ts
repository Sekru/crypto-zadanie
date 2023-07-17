import { createAction, props } from "@ngrx/store";
import { CryptoCurrency } from "src/app/models/crypto.interface";

export const loadCrypto = createAction(
    '[Crypto] Load crypto',
);

export const loadCryptoSuccess = createAction(
    '[Crypto] Load crypto success',
    props<{ data: CryptoCurrency[] }>()
);

export const loadCryptoFailure = createAction(
    '[Crypto] Load crypto failure',
    props<{ error: Error }>(),
);

export const loadSingleCrypto = createAction(
    '[Crypto] Load single crypto',
    props<{ id: string | null }>(),
);

export const loadSingleCryptoSuccess = createAction(
    '[Crypto] Load single crypto success',
    props<{ data: CryptoCurrency }>()
);

export const loadSingleCryptoFailure = createAction(
    '[Crypto] Load single crypto failure',
    props<{ error: Error }>(),
);