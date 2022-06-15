import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CompanySearchService } from '../company-search.service';

@Component({
  selector: 'app-company-details',
  templateUrl: './company-details.component.html',
  styleUrls: ['./company-details.component.scss']
})
export class CompanyDetailsComponent implements OnInit {
  officerList: any;
  companyInfo: any;
  constructor(private companyService: CompanySearchService, private router: Router) { }

  ngOnInit(): void {
    this.getCompanyInfo();
  }

  getCompanyInfo() {
      this.companyInfo = this.companyService.getSelectedCompanyData();
  }

    backToResults() {
        this.router.navigateByUrl('company-results');
    }
    navigateToOfficers() {
      this.router.navigate(['/officer-list']);
    }
}
