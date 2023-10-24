import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { env } from "../../../../../_env/env";

@Injectable({
  providedIn: "root"
})
export class RekLssmService {

  constructor(private http: HttpClient) { }

  GetData(): Observable<any> {
    return this.http.get(
      env.v1_API + "api-perbenihan-rek-lssm",
      {
        headers: new HttpHeaders({ 
            "Content-Type": "application/json",
        }),
        responseType: "json"
      }
    );
  }

}