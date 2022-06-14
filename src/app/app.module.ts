import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompanySearchComponent } from './company-search/company-search.component';
import { CompanySearchResultsComponent } from './company-search-results/company-search-results.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CompanySearchService } from './company-search.service';
import { HttpClientModule } from '@angular/common/http';
import { CompanyDetailsComponent } from './company-details/company-details.component';
import { CompanyResultsComponent } from './company-results/company-results.component';
import { OfficerListComponent } from './officer-list/officer-list.component';

@NgModule({
  declarations: [
    AppComponent,
    CompanySearchComponent,
    CompanySearchResultsComponent,
    CompanyDetailsComponent,
    CompanyResultsComponent,
    OfficerListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [CompanySearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
