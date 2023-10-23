import { Component } from "@angular/core";
import { StorageService } from "../../../../_services/storage.service";
import { InfoService } from "./info.service";
import { AuthService } from "../../../auth/auth.service";
import { LocationService } from "../../../../_services/location.service";
import * as opencage from "opencage-api-client";

@Component({
  selector: "app-info",
  templateUrl: "./info.component.html",
  styleUrls: ["./info.component.scss"]
})
export class InfoComponent {
  isLoggedIn : boolean = false;
  isComplete : boolean = false;
  isMenteri : boolean = false;
  formattedDate: string;
  dtName: string;
  dtUsername: string;
  dtEmail: string;
  latitude: number;
  longitude: number;
  address: string;
  weatherData: any = [];

  constructor(private locationService: LocationService, private storageService: StorageService, private infoService : InfoService, private authService: AuthService) {
    this.formattedDate = this.getFormattedDate();
    if (this.storageService.isLoggedIn()) {
      this.isLoggedIn = true;
      const data = this.storageService.getUser(true);
      if (data) {
        this.authService.validateRole().subscribe((role) => {
          if (role !== null) {
            if (role.data.toLowerCase() === 'menteri' || role.data.toLowerCase() === 'superadmin') {
              this.isMenteri = true;
            }
          };
        });
        this.dtName = data.data.name;
        this.dtUsername = data.data.username;
        this.dtEmail = data.data.email;
        this.infoService.isComplete(this.dtEmail, data.data.token).subscribe((res) => {
          this.isComplete = res.data.status;
        });
      }
    } else {
      this.isLoggedIn = false;
    }
  }

  ngOnInit() {
    this.locationService.getCurrentPosition().subscribe({
      next: position => {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
        this.getWeather();
        this.addressByOpenCage(this.latitude, this.longitude);
      },
      error: err => {
        console.error("Error getting location:", err);
      }
    });
  }

  private getWeather() {
    this.infoService.getWeather(this.latitude, this.longitude)
      .subscribe(data => {
        this.weatherData = data;
      });
  }

  private addressByOpenCage(lat: number, lng: number) {
    opencage
    .geocode({ q: `${lat}, ${lng}`, key: "60fefa41f986420db1704abc328c4a90" })
    .then((data) => {
      const address: string = data.results[0].formatted;
      this.address = address;
    })
    .catch((error) => {
      console.log("Error caught:", error.message);
    });
  }

  private getFormattedDate(): string {
    const currentDate = new Date();
    const options: Intl.DateTimeFormatOptions = {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric"
    };

    return currentDate.toLocaleDateString("id-ID", options);
  }
}
