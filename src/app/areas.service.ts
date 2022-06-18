import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Areas } from './areas';

@Injectable({
  providedIn: 'root'
})
export class AreasService {
      public areasUrl = "assets/areas.json"
      public thingsUrl = "assets/things.json"

      constructor(private httpClient: HttpClient) { }

      public getAreas(): Observable<any> {
        return this.httpClient.get(this.areasUrl);
      }

      public getThings(): Observable<any> {
        return this.httpClient.get(this.thingsUrl);
      }
}
