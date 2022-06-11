import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CompanySearchService } from '../company-search.service';

@Component({
  selector: 'app-company-search',
  templateUrl: './company-search.component.html',
  styleUrls: ['./company-search.component.scss']
})
export class CompanySearchComponent implements OnInit {
  companyInput: any;
  constructor(private companyService: CompanySearchService) { }

  ngOnInit(): void {

   
  }

  getAllMatchingCompanies() {
    let httpheaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'x-api-key': 'LVFkkEETEh6iKk2x05xBY7xfKSKmPGuV1gnilBnc',
      'Access-Control-Allow-Origin': '*'
    });

    this.companyService.getAllCompanies(httpheaders).subscribe(res => {
      console.log(res);
    }, error => {
      console.log('No results found');
    });
  }

  getCompanyInfo() {
    this.getAllMatchingCompanies();
  }
}
