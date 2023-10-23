import { Component, ViewEncapsulation, ViewChild, ElementRef } from "@angular/core";
import { FormBuilder, FormGroup, Validators, AbstractControl } from "@angular/forms";
import { Router } from "@angular/router";
import { StorageService } from "src/app/_services/storage.service";
import { RegionComponent } from "../../pages-shared/region/region.component";


const Swal = require("sweetalert2");
const msg = Swal.mixin({
  timer: 3000,
  timerProgressBar: true, 
})

@Component({
  selector: "app-my-land-list",
  templateUrl: "./my-land-list.component.html",
  styleUrls: ["./my-land-list.component.scss"],
  encapsulation: ViewEncapsulation.None
})
export class MyLandListComponent {
  @ViewChild(RegionComponent) regionComponent: RegionComponent;

  public openTab: string = "Land";
  bioForm: FormGroup;
  addressForm: FormGroup;
  landForm: FormGroup;

  selectedLat: number = 0;
  selectedLng: number = 0; 

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private storage: StorageService 
  ) { 
    this.landForm = this.formBuilder.group({
      name_val: [null, Validators.required],
      area_val: [null, Validators.required],
      prov_id_val: [null, Validators.required],
      reg_id_val: [null, Validators.required],
      sub_id_val: [null, Validators.required],
      urb_id_val: [null, Validators.required],
      address_val: [null, Validators.required],
      latitude_val: [null, Validators.required],
      longitude_val: [null, Validators.required],
    });
  }

  updateAddressForm() {
    const provinsiCode = this.regionComponent.provinsiSelected;
    const kabupatenCode = this.regionComponent.kabupatenSelected;
    const kecamatanCode = this.regionComponent.kecamatanSelected;
    const desaCode = this.regionComponent.desaSelected;

    console.log(provinsiCode);
    console.log(kabupatenCode);
    console.log(kecamatanCode);
    console.log(desaCode);

    // Assuming your FormGroup structure matches the selected region properties
    this.addressForm.patchValue({
      prov_id_val: provinsiCode,
      reg_id_val: kabupatenCode,
      sub_id_val: kecamatanCode,
      urb_id_val: desaCode
    });
  }

  tabbed(val: string) {
    this.openTab = val;
  }

  moveToNextTab(val: string) {

    const user = this.storage.getUser(true);

    let formData = {
      bio_data: this.bioForm.value,
      address_data: this.addressForm.value,
      land_data: this.landForm.value,
      section: null,
      email: user.data.email,
    };

    if (val == "Address") {
      formData = { ...formData, section: 'bio' };
    } else {
      formData = { ...formData, section: 'address' };
      msg.fire(
        "Tersimpan", 
        "Data berhasil disimpan",
        "success",
      );
      setTimeout( ()=> {
        this.router.navigate(["/dashboard"]);
      } , 1000);
    }
  }

  getErrorMsg(control: AbstractControl): string {
    if (control.hasError('required')) {
      return `wajib diisi.`;
    }
    if (control.hasError('minlength')) {
      return `harus minimal ${control.getError('minlength').requiredLength} characters.`;
    }
    if (control.hasError('maxlength')) {
      return `harus maksimal ${control.getError('maxlength').requiredLength} characters.`;
    }
    if (control.hasError('pattern')) {
      return `perhatikan tipe data yang diinput`;
    }

    return null;
  }

  onLocationUpdate(location: { lat: number; lng: number }) {
    this.selectedLat = location.lat;
    this.selectedLng = location.lng;

    if (this.openTab == "Address") {
      this.addressForm.patchValue({
        latitude_val: this.selectedLat,
        longitude_val: this.selectedLng,
      });
    } else if (this.openTab == "Land") {
      this.landForm.patchValue({
        latitude_val: this.selectedLat,
        longitude_val: this.selectedLng,
      });
    }
  }

  get commodityId(): string[] {
    return this.bioForm.get('commodity_id').value;
  }
}
