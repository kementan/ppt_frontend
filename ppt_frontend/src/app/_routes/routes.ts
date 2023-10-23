import { Routes } from "@angular/router";
import { UserGuard } from "../_guard/user.guard";
import { AdminGuard } from "../_guard/admin.guard";

export const contentRoutes: Routes = [
  {
    path: "dashboard",
    loadChildren: () => import("../pages/dashboard/dashboard.module").then((m) => m.DashboardModule),
  },
  {
    path: "profile",
    loadChildren: () => import("../pages/profile/profile.module").then((m) => m.ProfileModule),
    canActivate: [UserGuard],
  },
  {
    path: "lahan",
    loadChildren: () => import("../pages/my-land/my-land.module").then((m) => m.MyLandModule),
    canActivate: [UserGuard],
  },
  {
    path: "admin",
    loadChildren: () => import("../pages/admin/admin.module").then((m) => m.AdminModule),
    canActivate: [AdminGuard],
  },
];
