import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StorageService } from "../../_services/storage.service";
import { env } from "../../_env/env";

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private imageUrl: string = 'https://latihanonline.pertanian.go.id/print/print_cert_penyuluh1jt.php';

  constructor(private http: HttpClient, private storageService: StorageService) { }

  getImage(idPel: string, nik: string, tipe: string): Observable<Blob> {
    const url = `${this.imageUrl}?id_pel=${idPel}&nik=${nik}&tipe=${tipe}`;
    return this.http.get(url, { responseType: 'blob' });
  }

  getPdf(nik: string): Observable<Blob> {
    const user = this.storageService.getUser(true);
    let params = new HttpParams;
    params = params.set("nik", nik);

    return this.http.get(
      env.v1_API + "api-simluh-sertifikat",
      {
        headers: new HttpHeaders({ 
            "Content-Type": "application/json",
            "Authorization": `Bearer ${user.data.token}`
        }),
        params: params,
        responseType: "blob"
      }
    );
  }

  getPelatihan(nik: string): Observable<any> {
    const user = this.storageService.getUser(true);
    let params = new HttpParams;
    params = params.set("nik", nik);

    return this.http.get(
      env.v1_API + "api-simluh-riwayat-pelatihan",
      {
        headers: new HttpHeaders({ 
            "Content-Type": "application/json",
            "Authorization": `Bearer ${user.data.token}`
        }),
        params: params,
        responseType: "json"
      }
    );
  }

  getRegion(code: string): Observable<any> {
    const user = this.storageService.getUser(true);
    const url = `${env.v1_API}region-by-kode/${code}`;

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
