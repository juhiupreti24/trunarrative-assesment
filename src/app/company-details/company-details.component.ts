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
      let httpheaders = new HttpHeaders({
        'Content-Type': 'application/json',
        'x-api-key': 'LVFkkEETEh6iKk2x05xBY7xfKSKmPGuV1gnilBnc',
        'Access-Control-Allow-Origin': '*'
      });
  
      // this.companyService.getAllCompanies(this.companyInput).subscribe(res => {
      //   this.companyData = res;
      // }, error => {
      //   console.log('No results found');
      // });
      const res = {
        "page_number": 1,
        "kind": "search#companies",
        "total_results": 20,
        "items": [
            {
                "company_status": "active",
                "address_snippet": "Boswell Cottage Main Street, North Leverton, Retford, England, DN22 0AD",
                "date_of_creation": "2008-02-11",
                "matches": {
                    "title": [
                        1,
                        3
                    ]
                },
                "description": "06500244 - Incorporated on 11 February 2008",
                "links": {
                    "self": "/company/06500244"
                },
                "company_number": "06500244",
                "title": "BBC LIMITED",
                "company_type": "ltd",
                "address": {
                    "premises": "Boswell Cottage Main Street",
                    "postal_code": "DN22 0AD",
                    "country": "England",
                    "locality": "Retford",
                    "address_line_1": "North Leverton"
                },
                "kind": "searchresults#company",
                "description_identifier": [
                    "incorporated-on"
                ]
            }]
      };
      this.companyInfo = res.items[0];
      console.log(this.companyInfo);
    }

    backToResults() {
        this.router.navigateByUrl('company-results');
    }
    navigateToOfficers() {
      this.router.navigate(['/officer-list']);
    }
}
