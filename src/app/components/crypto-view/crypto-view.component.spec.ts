import { initialState } from './../../state/crypto/crypto.reducer';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CryptoViewComponent } from './crypto-view.component';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AngularMaterialModule } from 'src/app/angular-material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('CryptoViewComponent', () => {
  let component: CryptoViewComponent;
  let fixture: ComponentFixture<CryptoViewComponent>;
  let mockStore: MockStore;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideMockStore({ initialState })],
      imports: [
        RouterTestingModule.withRoutes([]),
        HttpClientTestingModule,
        AngularMaterialModule,
        BrowserAnimationsModule,
      ],
      declarations: [CryptoViewComponent]
    });
    fixture = TestBed.createComponent(CryptoViewComponent);
    component = fixture.componentInstance;
    mockStore = TestBed.inject(MockStore);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
