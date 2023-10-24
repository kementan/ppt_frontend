import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { env } from "../../../../_env/env";
import { StorageService } from "../../../../_services/storage.service";

@Injectable({
  providedIn: "root"
})
export class LaporanPanenService {

  constructor(private http: HttpClient, private storageService: StorageService) { }

  GetData(): Observable<any> {
    const user = this.storageService.getUser(true);
    return this.http.get(
      env.v1_API + "api-sipdps-laporan-panen",
      {
        headers: new HttpHeaders({ 
            "Content-Type": "application/json",
            "Authorization": `Bearer ${user.data.token}`
        }),
        responseType: "json"
      }
    );
  }

}
