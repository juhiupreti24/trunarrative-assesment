import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CompanySearchService {
  url = 'https://angular-exercise.trunarrative.cloud/TruProxyAPI/rest/Companies/v1/Officers';
  constructor(private http: HttpClient) { }

  createAuthorizationHeader(headers: Headers) {
    headers.append('Content-Type', 'application/json');
    headers.append('x-api-key', 'LVFkkEETEh6iKk2x05xBY7xfKSKmPGuV1gnilBnc');
    headers.append('Access-Control-Allow-Origin', '*');
  }


  public getAllCompanies(urlHeaders: HttpHeaders, options?: any): Observable<any> { 
    
    return this.http.get(this.url + '?CompanyNumber=' + 10241297, {headers: urlHeaders});
   
// HttpRequest request = new HttpRequest('GET', this.url);
// request.addHeader("x-api-key", '');
// HttpResponse response = this.http.execute(request);
// return Response;
  }
}
