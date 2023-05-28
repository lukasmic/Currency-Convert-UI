import { Component, OnInit } from '@angular/core';
import { CurrencyRateService } from '../services/currency-rate.service';

@Component({
  selector: 'app-currency-convert',
  templateUrl: './currency-convert.component.html',
  styleUrls: ['./currency-convert.component.scss']
})
export class CurrencyConvertComponent implements OnInit {
  public currencies: string[]; 
  public availableHistoricalDates: string[];
  public historicalDate: string;
  public startingAmount: number;
  public startingCurrency: string;
  public targetCurrency: string;
  public convertedAmount: number;

  public constructor(private currencyRateService: CurrencyRateService){}
    ngOnInit(): void {
      this.currencyRateService.getCurencies().subscribe((result) => this.currencies = result)
      this.currencyRateService.getHistoricalDates().subscribe((result) => this.availableHistoricalDates = result)
    }

  public Convert(){
    if (!this.historicalDate) {
      this.currencyRateService.getConvertedCurrency(this.startingCurrency, this.targetCurrency, this.startingAmount).subscribe((result) => this.convertedAmount = result);
    }
    else {
      this.currencyRateService.getHistoricalCurrency(this.startingCurrency, this.targetCurrency, this.startingAmount, this.historicalDate).subscribe((result) => this.convertedAmount = result);
    }
  }
}
