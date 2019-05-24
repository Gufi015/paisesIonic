import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: "root"
})
export class RestService {
  apiUrl = "https://restcountries.eu/rest/v2/all";

  constructor(private httpClient: HttpClient) {}


  getPaises(){
    return new Promise(resolve => {
      this.httpClient.get(this.apiUrl).subscribe(data => {
        resolve (data);

      },erorr =>{
        console.log(erorr);
      });
    }) ;
  }

}
