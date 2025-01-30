import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiDataService {

  constructor(private _httpClient:HttpClient) { }

  getRecipes(): Observable<any>{
    return this._httpClient.get('https://www.themealdb.com/api/json/v1/1/filter.php?c=Breakfast')
  }


}
