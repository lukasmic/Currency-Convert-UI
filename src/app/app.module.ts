import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CurrencyRateService } from './services/currency-rate.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CurrencyConvertComponent } from './currency-convert/currency-convert.component';

@NgModule({
  declarations: [
    AppComponent,
    CurrencyConvertComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [CurrencyRateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
