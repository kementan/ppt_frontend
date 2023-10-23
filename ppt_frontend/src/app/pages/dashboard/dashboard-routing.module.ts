import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { MainComponent } from "./main/main.component";
import { CompleteProfileComponent } from "./complete-profile/complete-profile.component";
import { LaporanTanamComponent } from "./src/laporan-tanam/laporan-tanam.component";
import { LaporanProduktivitasComponent } from "./src/laporan-produktivitas/laporan-produktivitas.component";
import { LaporanPusoComponent } from "./src/laporan-puso/laporan-puso.component";
import { LaporanPanenComponent } from "./src/laporan-panen/laporan-panen.component";
import { PerbenihanComponent } from "./src/perbenihan/perbenihan.component";
import { KomoditasComponent } from "./src/komoditas/komoditas.component";
import { BdspComponent } from "./src/bdsp/bdsp.component";
import { UserGuard } from "src/app/_guard/user.guard";
import { InformasiPenyuluhComponent } from "./src/informasi-penyuluh/informasi-penyuluh.component";
import { NtpComponent } from "./src/ntp/ntp.component";
import { PdbComponent } from "./src/pdb/pdb.component";
import { PrivacyPolicyComponent } from "./privacy-policy/privacy-policy.component";
import { TermsOfServiceComponent } from "./terms-of-service/terms-of-service.component";
import { BppComponent } from "./src/bpp/bpp.component";

const routes: Routes = [
  {
    path: "",
    children: [
      {
        path: "",
        component: MainComponent,
      },
      {
        path: "complete-profile",
        component: CompleteProfileComponent,
        canActivate: [UserGuard]
      },
      {
        path: "laporan-tanam",
        component: LaporanTanamComponent,
      },
      {
        path: "laporan-produktivitas",
        component: LaporanProduktivitasComponent,
      },
      {
        path: "laporan-puso",
        component: LaporanPusoComponent,
      },
      {
        path: "laporan-panen",
        component: LaporanPanenComponent,
      },
      {
        path: "perbenihan",
        component: PerbenihanComponent,
      },
      {
        path: "produksi-komoditas",
        component: KomoditasComponent,
      },
      {
        path: "bdsp",
        component: BdspComponent,
      },
      {
        path: "informasi-penyuluh",
        component: InformasiPenyuluhComponent,
      },
      {
        path: "ntp",
        component: NtpComponent,
      },
      {
        path: "pdb",
        component: PdbComponent,
      },
      {
        path: "persebaran-bpp",
        component: BppComponent,
      },
      {
        path: "privacy-policy",
        component: PrivacyPolicyComponent,
      },
      {
        path: "terms-of-service",
        component: TermsOfServiceComponent,
      },
    ],
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule { }
