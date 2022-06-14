import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CompanySearchService } from '../company-search.service';

@Component({
  selector: 'app-company-search',
  templateUrl: './company-search.component.html',
  styleUrls: ['./company-search.component.scss']
})
export class CompanySearchComponent implements OnInit {
  companyInput: any;
  companyData: any;
  constructor(private companyService: CompanySearchService, private router: Router) { }

  ngOnInit(): void {

   
  }


  getCompanyInfo() {
    // this.getAllMatchingCompanies();
  }

  restCompanyData() {
    this.companyData = [];
  }

  navigateToDetails() {
    this.router.navigate(['/company-detail']);
  }

  navigateToResults() {
    this.router.navigate(['/company-results']);
  }
}
