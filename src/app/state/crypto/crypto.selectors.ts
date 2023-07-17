import { createFeatureSelector, createSelector } from "@ngrx/store";
import { State, cryptoFeatureKey } from "./crypto.reducer";

export const selectCryptoState = createFeatureSelector<State>(
    cryptoFeatureKey,
);

export const selectCryptocurrencies = createSelector(
    selectCryptoState,
    (state: State) => state.cryptocurrencies,
);

export const selectCryptocurrency = createSelector(
    selectCryptoState,
    (state: State) => state.selected,
);