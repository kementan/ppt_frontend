import { Injectable } from "@angular/core";
import { AdminGuard } from "../_guard/admin.guard";

@Injectable({
  providedIn: "root",
})
export class LayoutService {

  public config = {
    settings: {
      layout: "Dubai",
      layout_type: "ltr",
      layout_version: "light-only",
      icon: "stroke-svg",
    },
    color: {
      primary_color: "#006600",
      secondary_color: "#f73164",
    },
    isadmin: false
  };

  constructor(private adminGuard: AdminGuard) {
    this.adminGuard.isAuthenticated$.subscribe(isAuthenticated => {
      if (isAuthenticated) {
        this.config.isadmin = isAuthenticated;
      }
    })
  }
}
