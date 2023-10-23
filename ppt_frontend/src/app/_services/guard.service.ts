import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { env } from "../_env/env";
import { StorageService } from "./storage.service";

@Injectable({
  providedIn: "root"
})
export class GuardService {
  constructor(private http: HttpClient, private storageService: StorageService) { }

  validateRole(): Observable<any> {
    const user = this.storageService.getUser(false);
    const token = "Bearer " + user.token;
    return this.http.get(
      env.v1_API + "user/get-role",
      { headers: new HttpHeaders({ "Content-Type": "application/json", "Authorization": token  }) },
    );
  };
}
