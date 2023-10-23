import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AdminRoutingModule } from "./admin-routing.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { PagesSharedModule } from "../pages-shared/pages-shared.module";

import { LoadingIconComponent } from "../../layout/_shared/loading-icon/loading-icon.component"
import { MenuListComponent } from "./menu/menu-list/menu-list.component";
import { MenuCuComponent } from './menu/menu-cu/menu-cu.component';
import { ServiceListComponent } from './service/service-list/service-list.component';
import { ServiceCuComponent } from './service/service-cu/service-cu.component';
import { SubSectorCuComponent } from './sub-sector/sub-sector-cu/sub-sector-cu.component';
import { SubSectorListComponent } from './sub-sector/sub-sector-list/sub-sector-list.component';
import { LandStatusListComponent } from './land-status/land-status-list/land-status-list.component';
import { LandStatusCuComponent } from './land-status/land-status-cu/land-status-cu.component';
import { RoleListComponent } from "./role/role-list/role-list.component";
import { RoleCuComponent } from "./role/role-cu/role-cu.component";
import { UserListComponent } from "./user/user-list/user-list.component";
import { UserCuComponent } from "./user/user-cu/user-cu.component";
import { ReportCategoryListComponent } from "./report-category/report-category-list/report-category-list.component";
import { ReportCategoryCuComponent } from "./report-category/report-category-cu/report-category-cu.component";
import { ReportListComponent } from "./report/report-list/report-list.component";
import { ReportCuComponent } from "./report/report-cu/report-cu.component";
import { NotificationListComponent } from "./notification/notification-list/notification-list.component";
import { NotificationCuComponent } from "./notification/notification-cu/notification-cu.component";
import { ConfigurationListComponent } from "./configuration/configuration-list/configuration-list.component";
import { SubMenuListComponent } from './menu/sub-menu-list/sub-menu-list.component';
import { ConfigurationCuComponent } from './configuration/configuration-cu/configuration-cu.component';
import { ApiFetcherComponent } from './api-fetcher/api-fetcher.component';
import { ModuleGeneratorComponent } from './module-generator/module-generator.component';

@NgModule({
  declarations: [
    LoadingIconComponent,
    MenuListComponent,
    MenuCuComponent,
    ServiceListComponent,
    ServiceCuComponent,
    SubSectorCuComponent,
    SubSectorListComponent,
    LandStatusListComponent,
    LandStatusCuComponent,
    RoleListComponent,
    RoleCuComponent,
    UserListComponent,
    UserCuComponent,
    ReportCategoryListComponent,
    ReportCategoryCuComponent,
    ReportListComponent,
    ReportCuComponent,
    NotificationListComponent,
    NotificationCuComponent,
    ConfigurationListComponent,
    SubMenuListComponent,
    ConfigurationCuComponent,
    ApiFetcherComponent,
    ModuleGeneratorComponent,
  ],
  imports: [
    CommonModule, AdminRoutingModule, FormsModule, ReactiveFormsModule, PagesSharedModule
  ]
})
export class AdminModule { }
