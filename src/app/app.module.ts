import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { CryptoTableComponent } from './components/crypto-table/crypto-table.component';
import { HttpClientModule } from '@angular/common/http';
import { CryptoEffects } from './state/crypto/crypto.effects';
import { cryptoFeatureKey, cryptoReducer } from './state/crypto/crypto.reducer';
import { AngularMaterialModule } from './angular-material.module';
import { CryptoViewComponent } from './components/crypto-view/crypto-view.component';

@NgModule({
  declarations: [
    AppComponent,
    CryptoTableComponent,
    CryptoViewComponent,
  ],
  imports: [
    AngularMaterialModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({
      [cryptoFeatureKey]: cryptoReducer
    }),
    EffectsModule.forRoot([CryptoEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
