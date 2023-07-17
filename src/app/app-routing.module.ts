import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CryptoTableComponent } from './components/crypto-table/crypto-table.component';
import { CryptoViewComponent } from './components/crypto-view/crypto-view.component';

const routes: Routes = [
  {
    path: 'cryptocurrencies',
    component: CryptoTableComponent,
  },
  {
    path: 'cryptocurrencies/:id',
    component: CryptoViewComponent
  },
  {
    path: '**',
    redirectTo: 'cryptocurrencies'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
