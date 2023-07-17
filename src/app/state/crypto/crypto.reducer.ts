import { createReducer, on } from "@ngrx/store";
import { loadCryptoSuccess, loadCrypto, loadCryptoFailure, loadSingleCrypto, loadSingleCryptoSuccess, loadSingleCryptoFailure } from "./crypto.actions";
import { CryptoCurrency } from "src/app/models/crypto.interface";

export const cryptoFeatureKey = 'crypto';

export interface State {
    cryptocurrencies: CryptoCurrency[];
    selected: CryptoCurrency | null,
    error: Error | null,
}

export const initialState: State = {
    cryptocurrencies: [],
    selected: null,
    error: null,
};

export const cryptoReducer = createReducer(
    initialState,
    on(loadCrypto, (state) => state),
    on(loadCryptoSuccess, (state, action) => {
        return {
            ...state,
            cryptocurrencies: action.data,
        };
    }),
    on(loadCryptoFailure, (state, action) => {
        return {
            ...state,
            error: action.error
        };
    }),
    on(loadSingleCrypto, (state) => state),
    on(loadSingleCryptoSuccess, (state, action) => {
        return {
            ...state,
            selected: action.data
        };
    }),
    on(loadSingleCryptoFailure, (state, action) => {
        console.log(state);
        return {
            ...state,
            error: action.error
        };
    }),
);