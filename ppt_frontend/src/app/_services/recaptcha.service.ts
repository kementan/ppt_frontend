import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { env } from "../_env/env";

const httpOptions = {
  headers: new HttpHeaders({ "Content-Type": "application/json" })
}

@Injectable({
  providedIn: "root",
})
export class RecaptchaService {
  constructor(private http: HttpClient) { }

  verifyRecaptcha(gresponse: string): Observable<any> {
    return this.http.post<any>(env.v1_API + "user/verify-recaptcha", {
      gresponse
    }, httpOptions);
  }
}
