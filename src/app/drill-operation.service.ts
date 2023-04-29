import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule, HttpHeaders, HttpResponseBase } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DrillOperation } from './DrillOperation';
@Injectable({
  providedIn: 'root'
})
export class DrillOperationService {

  apiUrl = 'https://localhost:7066/api/drilloperations/';

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get(this.apiUrl+'GetAll');
  }
  
  create(drillOperation: any) {
    const content_ = JSON.stringify(drillOperation);
    let options_ : any = {
      body: content_,
      observe: "response",
      responseType: "blob",
      headers: new HttpHeaders({
          "Content-Type": "application/json-patch+json",
          "Accept": "text/plain"
      })
  };
    return this.http.request("post",this.apiUrl+'Create',options_);
  }
  
  edit(id: number) {
    return this.http.get(this.apiUrl+`Edit?Id=${id}`);
  }
  
  update(drillOperation: any) {
    const content_ = JSON.stringify(drillOperation);
    let options_ : any = {
      body: content_,
      observe: "response",
      responseType: "blob",
      headers: new HttpHeaders({
          "Content-Type": "application/json-patch+json",
          "Accept": "text/plain"
      })
    };
    
    return this.http.request("post",this.apiUrl+'Edit', options_);
  }
  
  delete(id: number) {
    return this.http.get(this.apiUrl+`Delete?Id=${id}`);
  }
  
  getChart() {
    return this.http.get(this.apiUrl+'GetChart');
  }
}


