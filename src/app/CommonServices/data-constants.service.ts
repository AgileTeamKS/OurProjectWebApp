import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataConstantsService {
  // http://localhost:7459/API/ProjectServerMapping/List/1
//IIS
//readonly BASEAPIURL:string ='http://localhost:7459/API/';
//local .net instance
readonly BASEAPIURL:string ='http://103.228.144.82/ClientData2021Api/API/';
  constructor() { }
}
