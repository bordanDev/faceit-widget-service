import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.prod';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private httpClient = inject(HttpClient);

  public getPlayerByName(name: string): Observable<any> {
    return this.httpClient.get(faceitEndpoint + '/players' + '?nickname=' + `${name}`, {
      headers: baseHeaders,
    });
  }
}

const faceitEndpoint = 'https://open.faceit.com/data/v4';
const API_key = environment.apiBearerKey;
const baseHeaders = new HttpHeaders({
  Authorization: API_key,
  'Content-Type': 'application/json',
});
