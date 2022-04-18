import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ConverterService {

  url:string = 'https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies.json';

  constructor(private http: HttpClient) { }
  
  getCountries(){
    return this.http.get(this.url);
  }

  convert(from:any, to:any){
    return this.http.get(`http://data.fixer.io/api/latest?access_key=8eac46ae10ebfa3deb3f25405577f7a1&symbols=${from},${to}&format=1`);
  }

}
