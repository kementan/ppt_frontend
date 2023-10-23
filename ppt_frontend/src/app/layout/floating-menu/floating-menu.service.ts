import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { env } from "../../_env/env";

@Injectable({
  providedIn: "root"
})
export class FloatingMenuService {

  constructor(private http: HttpClient) { }

  getHD(): Observable<any | boolean> {
    const url = `${env.v1_API}configuration-hd`;
    return this.http.get(
        url,
        {
            headers: new HttpHeaders({ 
                "Content-Type": "application/json",
            }),
            responseType: 'json'
        }
    );
  }
}
