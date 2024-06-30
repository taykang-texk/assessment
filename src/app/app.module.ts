import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { TopNavComponent } from './components/top-nav/top-nav.component';
import { ProductPageComponent } from './pages/product-page/product-page.component';
import { NavComponent } from './components/nav/nav.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { ProductDetailPageComponent } from './pages/product-detail-page/product-detail-page.component';
import { Assessment2Component } from './pages/assessment2/assessment2.component';

@NgModule({
  declarations: [
    AppComponent,
    TopNavComponent,
    ProductPageComponent,
    NavComponent,
    ProductCardComponent,
    ProductDetailPageComponent,
    Assessment2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
