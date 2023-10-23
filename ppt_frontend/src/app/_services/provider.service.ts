import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class ProviderService {
  API_SIPDPS_Tanam: string = "https://api-splp.layanan.go.id/t/pertanian.go.id/TP-SIPDPS/1.0/v2/data-laporan-tanam?provinsi=12";
  API_SIPDPS_Produktifitas: string = "https://api-splp.layanan.go.id/t/pertanian.go.id/TP-SIPDPS/1.0/v2/data-laporan-produktivitas?provinsi=12";
  API_SIPDPS_Puso: string = "https://api-splp.layanan.go.id/t/pertanian.go.id/TP-SIPDPS/1.0/v2/data-laporan-puso?provinsi=12";
  API_SIPDPS_Panen: string = "https://api-splp.layanan.go.id/t/pertanian.go.id/TP-SIPDPS/1.0/v2/data-laporan-panen?provinsi=12";
  API_Perbenihan: string = "https://api-splp.layanan.go.id/t/pertanian.go.id/TP-SIPDPS/1.0/v2/data-laporan-panen?provinsi=12";

  constructor() { }

  execAPIData(): any {
        
  }
}
