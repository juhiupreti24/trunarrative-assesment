import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CompanySearchService } from '../company-search.service';

@Component({
  selector: 'app-officer-list',
  templateUrl: './officer-list.component.html',
  styleUrls: ['./officer-list.component.scss']
})
export class OfficerListComponent implements OnInit {
  officerList: any;
  constructor(private companyService: CompanySearchService) { }

  ngOnInit(): void {
    this.getAllOfficers();
  }

  getAllOfficers() {
    let httpheaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'x-api-key': 'LVFkkEETEh6iKk2x05xBY7xfKSKmPGuV1gnilBnc',
      'Access-Control-Allow-Origin': '*'
    });
    let companyNumber = this.companyService.getSelectedCompanyData();
    this.companyService.getAllCompanyOfficers(companyNumber).subscribe(res => {
      this.officerList = res.items;
    }, error => {
      console.log('No results found');
    });

  }
}
