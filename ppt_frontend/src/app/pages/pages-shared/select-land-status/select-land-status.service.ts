import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { env } from "../../../_env/env";
import { StorageService } from "../../../_services/storage.service";

@Injectable({
  providedIn: "root"
})
export class SelectLandStatusService {

  constructor(private http: HttpClient, private storageService: StorageService) { }

  getList(): Observable<any> {
    const user = this.storageService.getUser(true);
    const url = `${env.v1_API}land-status-list`;

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
}
