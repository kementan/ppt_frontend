import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";
import { env } from "../../../../_env/env";

@Injectable({
  providedIn: "root"
})
export class InfoService {

  constructor(private http: HttpClient) { }

  isComplete(email: string, token: string): Observable<any> {
    const url = `${env.v1_API}user-is-complete/${email}`;

    return this.http.get(
        url,
        {
            headers: new HttpHeaders({ 
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            }),
            responseType: 'json'
        }
    );
  }

  getWeather(lat: number, lng: number): Observable<any> {
    let params = new HttpParams;
    params = params.set("lat", lat);
    params = params.set("lng", lng);
    
    const url = `${env.v1_API}api-openweathermap`;
    return this.http.get(
        url,
        {
            headers: new HttpHeaders({ 
                "Content-Type": "application/json",
            }),
            responseType: 'json',
            params: params
        },
    );
  }
}
