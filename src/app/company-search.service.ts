import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CompanySearchService {
  companydetailUrl = 'https://angular-exercise.trunarrative.cloud/TruProxyAPI/rest/Companies/v1/Search?Query=';
  officerurl = 'https://angular-exercise.trunarrative.cloud/TruProxyAPI/rest/Companies/v1/Officers';
  constructor(private http: HttpClient) { }

  createAuthorizationHeader(headers: Headers) {
    headers.append('Content-Type', 'application/json');
    headers.append('x-api-key', 'LVFkkEETEh6iKk2x05xBY7xfKSKmPGuV1gnilBnc');
    headers.append('Access-Control-Allow-Origin', '*');
  }

  public getAllCompanies(options?: any): Observable<any> { 
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'x-api-key': 'LVFkkEETEh6iKk2x05xBY7xfKSKmPGuV1gnilBnc',
        'Accept': 'application/json'
      })
    };
    return this.http.get(this.companydetailUrl + '?CompanyNumber=' + options, httpOptions);
    // 10241297
  }
  public getAllCompanyOfficers(options?: any): Observable<any> { 
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'x-api-key': 'LVFkkEETEh6iKk2x05xBY7xfKSKmPGuV1gnilBnc',
        'Accept': 'application/json'
      })
    };
    return this.http.get(this.officerurl  + options, httpOptions);
    // 10241297
  }
}
