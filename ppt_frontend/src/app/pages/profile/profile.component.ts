import { Component, OnInit } from "@angular/core";
import { StorageService } from "../../_services/storage.service";
import { LoadingService } from "../../_services/loading.service";
import { ProfileService } from "./profile.service";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.scss"]
})
export class ProfileComponent implements OnInit {
  public uName: string;
  public uUsername: string;
  public uEmail: string;
  public uAddress: string;
  public uNIK: string;
  public uProvID: string;
  public uRegID: string;
  public uSubID: string;
  public uUrbID: string;
  public uProv: string;
  public uReg: string;
  public uKec: string;
  public uDes: string;
  public certificateImage: any;
  public isPDF: boolean;
  public pdfData: any;
  public trainings: any[];

  constructor(
    private storageService: StorageService, 
    public loadingService: LoadingService,
    private profileService: ProfileService
  ) { 
    const data = this.storageService.getUser(true);
    if (data) {
      this.uName = data.data.name;
      this.uUsername = data.data.username;
      this.uEmail = data.data.email;
      this.uAddress = data.data.address;
      this.uNIK = data.data.nik;
      this.uProvID = data.data.prov_id;
      this.uRegID = data.data.reg_id;
      this.uSubID = data.data.sub_id;
      this.uUrbID = data.data.urb_id;

      this.profileService.getRegion(this.uProvID).subscribe((res) => {
        this.uProv = res.data.nama;
      });

      this.profileService.getRegion(this.uRegID).subscribe((res) => {
        this.uReg = res.data.nama;
      });

      this.profileService.getRegion(this.uSubID).subscribe((res) => {
        this.uKec = res.data.nama;
      });

      this.profileService.getRegion(this.uUrbID).subscribe((res) => {
        this.uDes = res.data.nama;
      });
    }
  }

  ngOnInit(): void {
    this.profileService.getPdf(this.uNIK).subscribe((res) => {
      res.text().then((responseText) => {
        const hasScriptTag = /<script\b[^>]*>[\s\S]*<\/script>/i.test(responseText);
        if (hasScriptTag) {
          this.isPDF = false;
        } else {
          this.isPDF = true;
          this.pdfData = URL.createObjectURL(res);
        }
      })
    });

    this.profileService.getPelatihan(this.uNIK).subscribe((res) => {
      this.trainings = res;
    });
  }
}
