import { Component } from '@angular/core';
import { QuotesService } from './quotes.service';
import { Quote } from './quote';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  quote: Quote;

  constructor(private quotesService: QuotesService) {
    this.fetch();
  }

  fetch() {
    this.quotesService.fetchQuote().subscribe(response => this.quote = response);
  }
}
