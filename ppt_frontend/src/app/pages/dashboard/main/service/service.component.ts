import { Component } from "@angular/core";
import { StorageService } from "src/app/_services/storage.service";
import { AuthService } from "../../../auth/auth.service";

@Component({
  selector: "app-service",
  templateUrl: "./service.component.html",
  styleUrls: ["./service.component.scss"]
})
export class ServiceComponent {
  public show: boolean = false
  isLoggedIn : boolean;
  isAuthorized : boolean;

  constructor(
    private storageService: StorageService,
    private authService: AuthService
  ) {
    if (this.storageService.isLoggedIn()) {
      this.isLoggedIn = true;
      this.authService.validateRole().subscribe((role) => {
        if (role !== null) {
          if (role.data.toLowerCase() === 'menteri' || role.data.toLowerCase() === 'superadmin') {
            this.isAuthorized = true;
          }
        };
      });
    }
  }

  openPopupWindow(url: string, width: number, height: number) {
    const left = (window.innerWidth - width) / 2;
    const top = (window.innerHeight - height) / 2;
    window.open(url, 'NewWindow', `width=${width}, height=${height}, left=${left}, top=${top}`);
  }

  toggle() {
    this.show = !this.show
  }
}
