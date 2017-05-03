import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import "rxjs/add/operator/toPromise";

@Injectable()
export class ItemsService {

  constructor(private http: Http) { }

  public async getItems(){
      var response = await this.http.get("/api/items").toPromise();
      return response.json();
  }
}
