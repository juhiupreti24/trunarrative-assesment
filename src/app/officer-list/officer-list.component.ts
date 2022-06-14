import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-officer-list',
  templateUrl: './officer-list.component.html',
  styleUrls: ['./officer-list.component.scss']
})
export class OfficerListComponent implements OnInit {
  officerList: any;
  constructor() { }

  ngOnInit(): void {
    this.getAllOfficers();
  }

  getAllOfficers() {
    let httpheaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'x-api-key': 'LVFkkEETEh6iKk2x05xBY7xfKSKmPGuV1gnilBnc',
      'Access-Control-Allow-Origin': '*'
    });

    const res = {
      "etag": "6dd2261e61776d79c2c50685145fac364e75e24e",
      "links": {
          "self": "/company/10241297/officers"
      },
      "kind": "officer-list",
      "items_per_page": 35,
      "items": [
          {
              "address": {
                  "premises": "The Leeming Building",
                  "postal_code": "LS2 7JF",
                  "country": "England",
                  "locality": "Leeds",
                  "address_line_1": "Vicar Lane"
              },
              "name": "ANTLES, Kerri",
              "appointed_on": "2017-04-01",
              "officer_role": "director",
              "links": {
                  "officer": {
                      "appointments": "/officers/4R8_9bZ44w0_cRlrxoC-wRwaMiE/appointments"
                  }
              },
              "date_of_birth": {
                  "month": 6,
                  "year": 1969
              },
              "occupation": "Finance And Accounting",
              "country_of_residence": "United States",
              "nationality": "American"
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
