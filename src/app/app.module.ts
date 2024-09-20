import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProductComponent } from './product/product.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ProductsService } from './services/products.service';
import { FilterByNamePipe } from './pipes/filter-by-name.pipe';
import { SortByPricePipe } from './pipes/sort-by-price.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ProductComponent,
    HeaderComponent,
    FooterComponent,
    FilterByNamePipe,
    SortByPricePipe,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [ProductsService],
  bootstrap: [AppComponent],
})
export class AppModule {}
