import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CompanySearchService } from '../company-search.service';

@Component({
  selector: 'app-company-details',
  templateUrl: './company-details.component.html',
  styleUrls: ['./company-details.component.scss']
})
export class CompanyDetailsComponent implements OnInit {
  officerList: any;
  constructor(private companyService: CompanySearchService) { }

  ngOnInit(): void {
  }

  getAllOfficers() {
    let httpheaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'x-api-key': 'LVFkkEETEh6iKk2x05xBY7xfKSKmPGuV1gnilBnc',
      'Access-Control-Allow-Origin': '*'
    });

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
    this.officerList = res.items;
    // this.companyService.getAllCompanyOfficers(this.companyInput).subscribe(res => {
    //   this.officerList = res;
    // }, error => {
    //   console.log('No results found');
    // });

  }

}
