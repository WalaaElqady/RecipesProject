import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private _HttpClient:HttpClient) { }
  sendInfo(userInfo:object):Observable<any>{
    return this._HttpClient.post('https://upskilling-egypt.com:3001/contact', userInfo)
  }
}
