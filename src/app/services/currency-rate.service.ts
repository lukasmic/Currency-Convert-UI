import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CurrencyRateService {

  public constructor(private readonly httpClient: HttpClient) {}

  public getCurencies(): Observable<Array<string>> {
      const query = `${environment.currencyRateUrl}/currentRate/currencies`;

      return this.httpClient.get<Array<string>>(query, {});
  }

  public getHistoricalDates(): Observable<Array<string>> {
      const query = `${environment.currencyRateUrl}/historicalRate/availableDates`;

      return this.httpClient.get<Array<string>>(query, {});
  }

  public getConvertedCurrency(currency: string, targetCurrency :string, amount: number): Observable<number> {
      const query = `${environment.currencyRateUrl}/currentRate/convertedCurrency/${currency}:${amount}/${targetCurrency}`;

      return this.httpClient.get<number>(query, {});
  }

  public getHistoricalCurrency(currency: string, targetCurrency :string, amount: number, date: string): Observable<number> {
      const query = `${environment.currencyRateUrl}/historicalRate/convertedCurrency/${date}/${currency}:${amount}/${targetCurrency}`;

      return this.httpClient.get<number>(query, {});
  }
}
