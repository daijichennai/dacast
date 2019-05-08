import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core'; 
@Injectable()
export class CommfuncProvider {

  public apiKey = '127933_004af734f77d6f1dfaa5';
  constructor(public http: HttpClient) {
    // console.log('Hello CommfuncProvider Provider');
  }

}
