import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { env } from "../../../../../_env/env";

@Injectable({
  providedIn: "root"
})
export class SelProdusenService {

  constructor(private http: HttpClient) { }

  GetPerbenihanProdusen(): Observable<any> {
    return this.http.get(
      env.v1_API + "api-perbenihan-produsen",
      {
        headers: new HttpHeaders({ 
            "Content-Type": "application/json",
        }),
        responseType: "json"
      }
    );
  }

}
