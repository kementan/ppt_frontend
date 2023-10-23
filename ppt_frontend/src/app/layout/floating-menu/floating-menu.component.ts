import { Component } from "@angular/core";
import { NavService } from "../sidebar/sidebar.service";
import { LayoutService } from "../layout.service";
import { FloatingMenuService } from "./floating-menu.service";
import { StorageService } from "src/app/_services/storage.service";
import { CompleteProfileService } from "../../pages/dashboard/complete-profile/complete-profile.service";

@Component({
  selector: "app-floating-menu",
  templateUrl: "./floating-menu.component.html",
  styleUrls: ["./floating-menu.component.scss"]
})
export class FloatingMenuComponent {
  public elem: any;
  public phoneHD: string;
  public isMenteri: boolean;
  isLoggedIn: boolean = false;
  isComplete: boolean = false;

  constructor(
    public layout: LayoutService,
    public navServices: NavService,
    private service: FloatingMenuService,
    private storageService: StorageService,
    private completeService: CompleteProfileService,
  ) {
    if (this.storageService.isLoggedIn()) {
      this.isLoggedIn = true;
      this.completeService.isComplete().subscribe((res) => {
        if (res.data.status == true) {
          this.isComplete = true;
        }
      });
    }

    this.service.getHD().subscribe((res) => {
      this.phoneHD = res.data
    });
  }
}
