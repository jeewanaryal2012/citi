import { Injectable } from '@angular/core';
import { Http, Response, Headers} from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Account } from './account';

@Injectable()
export class AccountService{
  private baseUrl: string = 'http://localhost:3000';

  constructor(private http : Http){
  }

  getAll(){
    let people$ = this.http.get("http://localhost:3000/app/data/account.json", {headers: this.getHeaders()}).map(function(d) {
      console.log(d.json().accounts);
      return d.json().accounts;
    }).catch(handleError);
    return people$;
  }

  private getHeaders(){
    let headers = new Headers();
    headers.append('Accept', 'application/json');
    return headers;
  }
}


function handleError (error: any) {
  let errorMsg = error.message || "Error receiving data.";
  console.error(errorMsg);
  return Observable.throw(errorMsg);
}
