import { HttpClientTestingModule } from '@angular/common/http/testing';
import { cryptoFeatureKey, initialState } from './../../state/crypto/crypto.reducer';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore, MockStore } from '@ngrx/store/testing';


import { CryptoTableComponent } from './crypto-table.component';
import { RouterTestingModule } from '@angular/router/testing';
import { Component } from '@angular/core';
import { AngularMaterialModule } from 'src/app/angular-material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Router } from '@angular/router';

@Component({ selector: 'app-test-blank', template: `` })
class BlankComponent {}

describe('CryptoTableComponent', () => {
  let component: CryptoTableComponent;
  let fixture: ComponentFixture<CryptoTableComponent>;
  let mockStore: MockStore;
  const mockRouter = {
    navigate: jasmine.createSpy('navigate'),
  };


  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideMockStore({ initialState }), { provide: Router, useValue: mockRouter }],
      imports: [
        HttpClientTestingModule,
        AngularMaterialModule,
        BrowserAnimationsModule,
      ],
      declarations: [CryptoTableComponent]
    });
    fixture = TestBed.createComponent(CryptoTableComponent);
    component = fixture.componentInstance;
    mockStore = TestBed.inject(MockStore);
    fixture.detectChanges();
    mockStore.setState({
      [cryptoFeatureKey]: {
        cryptocurrencies: [{"id":"btc-bitcoin","name":"Bitcoin","symbol":"BTC","rank":1,"circulating_supply":19426506,"total_supply":19426512,"max_supply":21000000,"beta_value":1.0563,"first_data_at":"2010-07-17T00:00:00Z","last_updated":"2023-07-11T08:40:17Z","quotes":{"USD":{"price":30538.078793975994,"volume_24h":13441600877.886246,"volume_24h_change_24h":64.12,"market_cap":593248170920,"market_cap_change_24h":1.24,"percent_change_15m":-0.03,"percent_change_30m":-0.11,"percent_change_1h":-0.09,"percent_change_6h":0.14,"percent_change_12h":-0.84,"percent_change_24h":1.24,"percent_change_7d":-1.46,"percent_change_30d":18.31,"percent_change_1y":54.9,"ath_price":68692.13703693185,"ath_date":"2021-11-10T16:50:00Z","percent_from_price_ath":-55.54}}}]
      },
    });
    component.ngOnInit();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render list with btc', () => {
    const tableRows = fixture.nativeElement.querySelectorAll('tr');
    const tableColl = fixture.nativeElement.querySelectorAll('th');
    expect(tableRows.length).toBe(2);
    expect(tableColl.length).toBe(10);
  });

  it('should redirect to currency page on row click', () => {
    const row = fixture.nativeElement.querySelector('#btc-bitcoin');
    row.click();
    expect(mockRouter.navigate).toHaveBeenCalledWith(['/cryptocurrencies', 'btc-bitcoin']);
  });

  it('should add to favorites', () => {
    const icon = fixture.nativeElement.querySelector('.favorite');
    icon.click();
    fixture.detectChanges();
    const inActiveIcon = fixture.nativeElement.querySelector('.favorite');
    const activeIcon = fixture.nativeElement.querySelector('.favorite-active');
    expect(activeIcon).toBeTruthy();
    expect(inActiveIcon).toBeFalsy();
  });
});
