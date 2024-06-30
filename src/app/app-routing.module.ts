import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductDetailPageComponent } from './pages/product-detail-page/product-detail-page.component';
import { ProductPageComponent } from './pages/product-page/product-page.component';
import { Assessment2Component } from './pages/assessment2/assessment2.component';

const routes: Routes = [
  { path: 'products', component: ProductPageComponent },
  { path: 'productDetail', component: ProductDetailPageComponent },
  { path: 'assessment2', component: Assessment2Component },
  { path: '', redirectTo: '/products', pathMatch: 'full' }, // Redirect to product list by default
  { path: '**', redirectTo: '/products' } ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
