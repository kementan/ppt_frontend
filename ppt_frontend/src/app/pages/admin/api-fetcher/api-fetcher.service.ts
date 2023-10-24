import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { env } from "../../../_env/env";
import { StorageService } from "../../../_services/storage.service";

@Injectable({
  providedIn: "root"
})
export class ApiFetcherService {

  constructor(private http: HttpClient, private storageService: StorageService) { }

  GetSIPDPSTanam(): Observable<any> {
    const user = this.storageService.getUser(true);
    return this.http.get(
      env.v1_API + "api-sipdps-laporan-tanam-fetch",
      {
        headers: new HttpHeaders({ 
            "Content-Type": "application/json",
            "Authorization": `Bearer ${user.data.token}`
        }),
        responseType: "json"
      }
    );
  }

  GetSIPDPSProduktivitas(): Observable<any> {
    const user = this.storageService.getUser(true);
    return this.http.get(
      env.v1_API + "api-sipdps-laporan-produktivitas-fetch",
      {
        headers: new HttpHeaders({ 
            "Content-Type": "application/json",
            "Authorization": `Bearer ${user.data.token}`
        }),
        responseType: "json"
      }
    );
  }

  GetSIPDPSPuso(): Observable<any> {
    const user = this.storageService.getUser(true);
    return this.http.get(
      env.v1_API + "api-sipdps-laporan-puso-fetch",
      {
        headers: new HttpHeaders({ 
            "Content-Type": "application/json",
            "Authorization": `Bearer ${user.data.token}`
        }),
        responseType: "json"
      }
    );
  }

  GetSIPDPSPanen(): Observable<any> {
    const user = this.storageService.getUser(true);
    return this.http.get(
      env.v1_API + "api-sipdps-laporan-panen-fetch",
      {
        headers: new HttpHeaders({ 
            "Content-Type": "application/json",
            "Authorization": `Bearer ${user.data.token}`
        }),
        responseType: "json"
      }
    );
  }

  GetPerbenihanProdusen(): Observable<any> {
    const user = this.storageService.getUser(true);
    return this.http.get(
      env.v1_API + "api-perbenihan-produsen-fetch",
      {
        headers: new HttpHeaders({ 
            "Content-Type": "application/json",
            "Authorization": `Bearer ${user.data.token}`
        }),
        responseType: "json"
      }
    );
  }

  GetPerbenihanRekNas(): Observable<any> {
    const user = this.storageService.getUser(true);
    return this.http.get(
      env.v1_API + "api-perbenihan-rek-nas-fetch",
      {
        headers: new HttpHeaders({ 
            "Content-Type": "application/json",
            "Authorization": `Bearer ${user.data.token}`
        }),
        responseType: "json"
      }
    );
  }

  GetPerbenihanRekBpsb(): Observable<any> {
    const user = this.storageService.getUser(true);
    return this.http.get(
      env.v1_API + "api-perbenihan-rek-bpsb-fetch",
      {
        headers: new HttpHeaders({ 
            "Content-Type": "application/json",
            "Authorization": `Bearer ${user.data.token}`
        }),
        responseType: "json"
      }
    );
  }

  GetPerbenihanRekLssm(): Observable<any> {
    const user = this.storageService.getUser(true);
    return this.http.get(
      env.v1_API + "api-perbenihan-rek-lssm-fetch",
      {
        headers: new HttpHeaders({ 
            "Content-Type": "application/json",
            "Authorization": `Bearer ${user.data.token}`
        }),
        responseType: "json"
      }
    );
  }

  GetPerbenihanRekPenyaluran(): Observable<any> {
    const user = this.storageService.getUser(true);
    return this.http.get(
      env.v1_API + "api-perbenihan-rek-penyaluran-fetch",
      {
        headers: new HttpHeaders({ 
            "Content-Type": "application/json",
            "Authorization": `Bearer ${user.data.token}`
        }),
        responseType: "json"
      }
    );
  }

  GetPerbenihanRekPenyebaran(): Observable<any> {
    const user = this.storageService.getUser(true);
    return this.http.get(
      env.v1_API + "api-perbenihan-rek-penyebaran-fetch",
      {
        headers: new HttpHeaders({ 
            "Content-Type": "application/json",
            "Authorization": `Bearer ${user.data.token}`
        }),
        responseType: "json"
      }
    );
  }

  GetPerbenihanRekProdusen(): Observable<any> {
    const user = this.storageService.getUser(true);
    return this.http.get(
      env.v1_API + "api-perbenihan-rek-produsen-fetch",
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
