import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompanySearchComponent } from './company-search/company-search.component';
import { CompanySearchResultsComponent } from './company-search-results/company-search-results.component';
import { FormsModule } from '@angular/forms';
import { CompanySearchService } from './company-search.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    CompanySearchComponent,
    CompanySearchResultsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [CompanySearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
