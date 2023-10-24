import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LayoutModule } from "../../layout/layout.module";
import { NgApexchartsModule } from "ng-apexcharts";
import { DashboardRoutingModule } from "./dashboard-routing.module";
import { PagesSharedModule } from "../pages-shared/pages-shared.module";
import { NgxPaginationModule } from 'ngx-pagination';

import { CompleteProfileComponent } from "./complete-profile/complete-profile.component";
import { MainComponent } from "./main/main.component";
import { InfoComponent } from "./main/info/info.component";
import { ServiceComponent } from "./main/service/service.component";
import { OtherComponent } from "./main/other/other.component";
import { ProductionComponent } from "./main/other/production/production.component";
import { LaporanTanamComponent } from "./src/laporan-tanam/laporan-tanam.component";
import { LaporanProduktivitasComponent } from "./src/laporan-produktivitas/laporan-produktivitas.component";
import { LaporanPusoComponent } from "./src/laporan-puso/laporan-puso.component";
import { LaporanPanenComponent } from "./src/laporan-panen/laporan-panen.component";
import { PerbenihanComponent } from "./src/perbenihan/perbenihan.component";
import { ConsumptionComponent } from './main/other/consumption/consumption.component';
import { KomoditasComponent } from './src/komoditas/komoditas.component';
import { BdspComponent } from './src/bdsp/bdsp.component';
import { InformasiPenyuluhComponent } from './src/informasi-penyuluh/informasi-penyuluh.component';
import { NtpComponent } from './src/ntp/ntp.component';
import { PdbComponent } from './src/pdb/pdb.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { TermsOfServiceComponent } from './terms-of-service/terms-of-service.component';
import { BppComponent } from './src/bpp/bpp.component';
import { ModuleDetailComponent } from './src/module-detail/module-detail.component';
import { SelProdusenComponent } from './src/perbenihan/sel-produsen/sel-produsen.component';
import { RekNasComponent } from './src/perbenihan/rek-nas/rek-nas.component';
import { RekLssmComponent } from './src/perbenihan/rek-lssm/rek-lssm.component';
import { RekBpsbComponent } from './src/perbenihan/rek-bpsb/rek-bpsb.component';
import { RekPenyaluranComponent } from './src/perbenihan/rek-penyaluran/rek-penyaluran.component';
import { RekPenyebaranComponent } from './src/perbenihan/rek-penyebaran/rek-penyebaran.component';
import { RekProdusenComponent } from './src/perbenihan/rek-produsen/rek-produsen.component';

@NgModule({
  declarations: [
    CompleteProfileComponent,
    ProductionComponent,
    MainComponent,
    InfoComponent,
    ServiceComponent,
    OtherComponent,
    LaporanTanamComponent,
    LaporanProduktivitasComponent,
    LaporanPusoComponent,
    LaporanPanenComponent,
    PerbenihanComponent,
    ConsumptionComponent,
    KomoditasComponent,
    BdspComponent,
    InformasiPenyuluhComponent,
    NtpComponent,
    PdbComponent,
    PrivacyPolicyComponent,
    TermsOfServiceComponent,
    BppComponent,
    ModuleDetailComponent,
    SelProdusenComponent,
    RekNasComponent,
    RekLssmComponent,
    RekBpsbComponent,
    RekPenyaluranComponent,
    RekPenyebaranComponent,
    RekProdusenComponent,
  ],
  imports: [
    CommonModule, DashboardRoutingModule, LayoutModule, NgApexchartsModule, NgxPaginationModule, PagesSharedModule
  ],
  exports: [
    
  ]
})
export class DashboardModule { }
