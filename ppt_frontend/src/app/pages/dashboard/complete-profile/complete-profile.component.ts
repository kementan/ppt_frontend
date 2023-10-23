import { Component, ViewEncapsulation, ViewChild } from "@angular/core";
import { FormBuilder, FormGroup, Validators, AbstractControl } from "@angular/forms";
import { Router } from "@angular/router";
import { CompleteProfileService } from "./complete-profile.service";
import { StorageService } from "src/app/_services/storage.service";
import { RegionComponent } from "../../pages-shared/region/region.component";

const Swal = require("sweetalert2");
const msg = Swal.mixin({
  timer: 3000,
  timerProgressBar: true, 
})

@Component({
  selector: "app-complete-profile",
  templateUrl: "./complete-profile.component.html",
  styleUrls: ["./complete-profile.component.scss"],
  encapsulation: ViewEncapsulation.None
})
export class CompleteProfileComponent {
  @ViewChild(RegionComponent) regionComponent: RegionComponent;

  public openTab: string = "Biodata";
  bioForm: FormGroup;
  addressForm: FormGroup;
  selectMode: string = "public";

  selectedLat: number = 0;
  selectedLng: number = 0; 

  constructor(
    private service: CompleteProfileService, 
    private router: Router,
    private formBuilder: FormBuilder,
    private storage: StorageService 
  ) { 
    this.service.isVerified().subscribe((res) => {
      if (res.data == false) {
        msg.fire(
          "Belum Verifikasi Email", 
          "Anda belum melakukan verifikasi email, silahkan cek kotak masuk email anda untuk melanjutkan lengkapi data", 
          "warning",
        );
        this.router.navigate(["/dashboard"]);
      }
    });

    this.service.isComplete().subscribe((res) => {
      if (res.data.status == true) {
        this.router.navigate(["/dashboard"]);
      }
    });

    this.bioForm = this.formBuilder.group({
      role_id_val: [null, Validators.required],
      name_val: [null, [Validators.required, Validators.minLength(4), Validators.maxLength(50)]],
      nik_val: [null, [
          Validators.required, 
          Validators.minLength(16), 
          Validators.maxLength(16),
          Validators.pattern('^[0-9]*$')
        ]
      ],
      pob_val: [null, [Validators.required, Validators.minLength(4), Validators.maxLength(50)]],
      dob_val: [null, Validators.required],
      phone_val: [null, [
          Validators.required, 
          Validators.minLength(9), 
          Validators.maxLength(15),
          Validators.pattern('^[0-9]*$')
        ]
      ],
      gender_val: ["l"],
      sub_sector_id: [[]],
    });

    this.addressForm = this.formBuilder.group({
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
    if (this.addressForm.value.prov_id_val == "- Pilih -") {
      this.addressForm.patchValue({
        prov_id_val: null,
        reg_id_val: null,
        sub_id_val: null,
        urb_id_val: null,
      });
    } else if (this.addressForm.value.reg_id_val == "- Pilih -") {
      this.addressForm.patchValue({
        reg_id_val: null,
        sub_id_val: null,
        urb_id_val: null,
      });
    } else if (this.addressForm.value.sub_id_val == "- Pilih -") {
      this.addressForm.patchValue({
        sub_id_val: null,
        urb_id_val: null,
      });
    } else if (this.addressForm.value.urb_id_val == "- Pilih -") {
      this.addressForm.patchValue({
        urb_id_val: null,
      });
    }
  }

  tabbed(val: string) {
    this.openTab = val;
  }

  moveToNextTab(val: string) {
    if (this.subsectorId.length <= 0) {
      msg.fire(
        "Sub Sektor", 
        "Pilih minimal 1 sub sektor", 
        "warning",
      );
      return false;
    }

    const user = this.storage.getUser(true);

    let formData = {
      bio_data: this.bioForm.value,
      address_data: this.addressForm.value,
      section: null,
      email: user.data.email,
    };

    if (val == "Address") {
      formData = { ...formData, section: 'bio' };
    } else {
      formData = { ...formData, section: 'address' };
    }

    this.service.saveCompletion(formData).subscribe({
      next: res => {
        console.log(res);
        if (formData.section == "bio") {
          if (res.status == 200 && res.data[0].NIK != "") {
            if (res.data[0].NAMA_LGKP.includes("Tidak Sesuai")) {
              msg.fire(
                "Nama Lengkap", 
                res.data[0].NAMA_LGKP, 
                "warning",
              );
              return false;
            } else if (res.data[0].JENIS_KLMIN.includes("Tidak Sesuai")) {
              msg.fire(
                "Jenis Kelamin", 
                res.data[0].JENIS_KLMIN, 
                "warning",
              );
              return false;
            } else if (res.data[0].TMPT_LHR.includes("Tidak Sesuai")) {
              msg.fire(
                "Tempat Lahir", 
                res.data[0].TMPT_LHR, 
                "warning",
              );
              return false;
            } else if (res.data[0].TGL_LHR.includes("Tidak Sesuai")) {
              msg.fire(
                "Tanggal Lahir", 
                res.data[0].TGL_LHR, 
                "warning",
              );
              return false;
            } else {
              this.tabbed(val);
            }
          } else {
            msg.fire(
              "NIK", 
              "Tidak valid, mohon periksa kembali", 
              "warning",
            );
            return false;
          }
        } else {
          msg.fire(
            "Tersimpan", 
            "Data berhasil disimpan",
            "success",
          );
          setTimeout( ()=> {
            window.location.reload();
          } , 1000);
        }
      },
      error: err => {
        console.log(err);
      }
    });
  }

  logFormValue() {
    console.log('BioForm Value:', this.bioForm.value);
    console.log('AddressForm Value:', this.addressForm.value);
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

    this.addressForm.patchValue({
      latitude_val: this.selectedLat,
      longitude_val: this.selectedLng,
    });
  }

  get subsectorId(): string[] {
    return this.bioForm.get('sub_sector_id').value;
  }
}
