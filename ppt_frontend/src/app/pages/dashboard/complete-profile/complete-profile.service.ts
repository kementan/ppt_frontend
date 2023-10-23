import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";
import { env } from "../../../_env/env";
import { StorageService } from "../../../_services/storage.service";

@Injectable({
  providedIn: "root"
})
export class CompleteProfileService {

  constructor(private http: HttpClient, private storageService: StorageService) { }

  isVerified(): Observable<any> {
    const user = this.storageService.getUser(true);
    const url = `${env.v1_API}user-is-verified/${user.data.email}`;

    return this.http.get(
        url,
        {
            headers: new HttpHeaders({ 
                "Content-Type": "application/json",
                "Authorization": `Bearer ${user.data.token}`
            }),
            responseType: 'json'
        }
    );
  }

  isFilled(): Observable<any> {
    const user = this.storageService.getUser(true);
    const url = `${env.v1_API}8asd87asd98/7asd8a7sd68as7`;

    return this.http.get(
        url,
        {
            headers: new HttpHeaders({ 
                "Content-Type": "application/json",
                "Authorization": `Bearer ${user.data.token}`
            }),
            responseType: 'json'
        }
    );
  }

  isComplete(): Observable<any> {
    const user = this.storageService.getUser(true);
    const url = `${env.v1_API}user-is-complete/${user.data.email}`;

    return this.http.get(
        url,
        {
            headers: new HttpHeaders({ 
                "Content-Type": "application/json",
                "Authorization": `Bearer ${user.data.token}`
            }),
            responseType: 'json'
        }
    );
  }

  saveCompletion(formData: any): Observable<any> {
    const user = this.storageService.getUser(true);

    return this.http.post(
      env.v1_API + "user/do-completion",
      formData,
      {
          headers: new HttpHeaders({ 
              "Content-Type": "application/json",
              "Authorization": `Bearer ${user.data.token}`
          }),
          responseType: 'json'
      }
    );
  }

  getCompletion(): Observable<any> {
    const user = this.storageService.getUser(true);
    const requestBody = {
      email: user.data.email,
    };

    return this.http.post(
      env.v1_API + "user/get-completion",
      requestBody,
      {
          headers: new HttpHeaders({ 
              "Content-Type": "application/json",
              "Authorization": `Bearer ${user.data.token}`
          }),
          responseType: 'json'
      }
    );
  }
}
