import { Routes } from '@angular/router';
import { HomeComponent } from './component/home/home';
import { ProductComponent } from './component/product/product';
import { BillingComponent } from './component/billing/billing';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'product/:id', component: ProductComponent },
  { path: 'billing', component: BillingComponent }
];

