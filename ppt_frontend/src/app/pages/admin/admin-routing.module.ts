import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { MenuListComponent } from "./menu/menu-list/menu-list.component";
import { ServiceListComponent } from "./service/service-list/service-list.component";
import { RoleListComponent } from "./role/role-list/role-list.component";
import { UserListComponent } from "./user/user-list/user-list.component";
import { LandStatusListComponent } from "./land-status/land-status-list/land-status-list.component";
import { SubSectorListComponent } from "./sub-sector/sub-sector-list/sub-sector-list.component";
import { ReportCategoryListComponent } from "./report-category/report-category-list/report-category-list.component";
import { ReportListComponent } from "./report/report-list/report-list.component";
import { NotificationListComponent } from "./notification/notification-list/notification-list.component";
import { ConfigurationListComponent } from "./configuration/configuration-list/configuration-list.component";
import { ApiFetcherComponent } from "./api-fetcher/api-fetcher.component";
import { ModuleGeneratorComponent } from "./module-generator/module-generator.component";

const routes: Routes = [
  {
    path: "",
    children: [
      {
        path: "menu",
        component: MenuListComponent,
      },
      {
        path: "layanan",
        component: ServiceListComponent,
      },
      {
        path: "role",
        component: RoleListComponent,
      },
      {
        path: "user",
        component: UserListComponent,
      },
      {
        path: "status-lahan",
        component: LandStatusListComponent,
      },
      {
        path: "sub-sektor",
        component: SubSectorListComponent,
      },
      {
        path: "kategori-laporan",
        component: ReportCategoryListComponent,
      },
      {
        path: "laporan",
        component: ReportListComponent,
      },
      {
        path: "pemberitahuan",
        component: NotificationListComponent,
      },
      {
        path: "pengaturan",
        component: ConfigurationListComponent,
      },
      {
        path: "api-fetcher",
        component: ApiFetcherComponent,
      },
      {
        path: "module-generator",
        component: ModuleGeneratorComponent,
      },
    ],
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule { }