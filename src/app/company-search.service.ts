import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CompanySearchService {
  selectedCompanyName: string = '';
  companyData: any;
  companyInput: any;
  companydetailUrl = 'https://angular-exercise.trunarrative.cloud/TruProxyAPI/rest/Companies/v1/Search?Query=';
  officerurl = 'https://angular-exercise.trunarrative.cloud/TruProxyAPI/rest/Companies/v1/Officers?CompanyNumber=';
  constructor(private http: HttpClient) { }

  createAuthorizationHeader(headers: Headers) {
    headers.append('Content-Type', 'application/json');
    headers.append('x-api-key', 'LVFkkEETEh6iKk2x05xBY7xfKSKmPGuV1gnilBnc');
    headers.append('Access-Control-Allow-Origin', '*');
  }

  public getAllCompanies(): Observable<any> { 
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'x-api-key': 'LVFkkEETEh6iKk2x05xBY7xfKSKmPGuV1gnilBnc',
        'Accept': 'application/json'
      })
    };
    return this.http.get(this.companydetailUrl +  this.companyInput, httpOptions);
    // 10241297
  }
  public getAllCompanyOfficers(options: any): Observable<any> { 
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'x-api-key': 'LVFkkEETEh6iKk2x05xBY7xfKSKmPGuV1gnilBnc',
        'Accept': 'application/json'
      })
    };
    return this.http.get(this.officerurl  + options.company_number, httpOptions);
    // 10241297
  }

  setCompanyData(data: any) {
    this.companyData = data;
  }

  getSelectedCompanyData() {
    let selectedItem;
    this.companyData.forEach((item : any) => {
      if (item.title === this.selectedCompanyName) {
        selectedItem =  item;
      }
    });
    return selectedItem;
  }
}
