import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuoteComponent } from './quote/quote.component';
import { QuoteVoteComponent } from './quote-vote/quote-vote.component';
import { DateCountPipe } from './date-count.pipe';
import { QuoteFormComponent } from './quote-form/quote-form.component';
import { HighlightDirective } from './highlight.directive';
import { QuoteDetailComponent } from './quote-detail/quote-detail.component';



@NgModule({
  declarations: [
    AppComponent,
    QuoteComponent,
    QuoteVoteComponent,
    DateCountPipe,
    QuoteFormComponent,
    HighlightDirective,
    QuoteDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
