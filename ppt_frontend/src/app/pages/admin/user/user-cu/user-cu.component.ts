// user-cu.component.ts
import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from "@angular/forms";
import { UserService } from "../user.service";
import { RegionComponent } from "../../../pages-shared/region/region.component";
import { Subscription } from 'rxjs';

const Swal = require('sweetalert2')
const msg = Swal.mixin({
  timer: 3000,
  timerProgressBar: true, 
})

@Component({
  selector: 'app-user-cu',
  templateUrl: './user-cu.component.html',
  styleUrls: ['./user-cu.component.scss'],
})
export class UserCuComponent implements OnInit, OnDestroy {
  @ViewChild(RegionComponent) regionComponent: RegionComponent;

  id: string;
  activeLabel: string;
  labelBadge: string = "success";
  userForm: FormGroup;
  selectMode: string = "private";
  currentRoleID: string;
  private subs1: Subscription;

  constructor(
    private userService: UserService,
    private formBuilder: FormBuilder
  ) { 
    this.userForm = this.formBuilder.group({
      role_id: [null, Validators.required],
      province_id: [null, Validators.required],
      regency_id: [null, Validators.required],
      subdistrict_id: [null, Validators.required],
      urbanvillage_id: [null, Validators.required],
      name: [null, [Validators.required, Validators.minLength(4), Validators.maxLength(50)]],
      username: [null, [Validators.required, Validators.minLength(4), Validators.maxLength(50)]],
      email: [null, [Validators.required, Validators.minLength(4), Validators.maxLength(50)]],
      phone: [null, [
          Validators.required, 
          Validators.minLength(9), 
          Validators.maxLength(15),
          Validators.pattern('^[0-9]*$')
        ]
      ],
      password: [null],
      nik: [null, [
          Validators.required, 
          Validators.minLength(16), 
          Validators.maxLength(16),
          Validators.pattern('^[0-9]*$')
        ]
      ],
      nip: [null],
      pob: [null, [Validators.required, Validators.minLength(4), Validators.maxLength(50)]],
      dob: [null, Validators.required],
      gender: ["l"],
      role_name: [null],
      address: [null, Validators.required],
      is_active: [false, Validators.required],
      is_complete: [false, Validators.required],
      is_verified: [false, Validators.required],
    });
  }

  ngOnInit(): void {
    this.userService.getLabel().subscribe((label) => {
      this.activeLabel = label;
      if (label == "Data Baru") {
        this.labelBadge = "success";
      } else {
        this.labelBadge = "info";
      }
    });

    this.subs1 = this.userService.getID().subscribe((id) => {
      this.id = id;
      if (this.id) {
        this.loadFormData();
      }
    });
  }

  ngOnDestroy(): void {
    if (this.subs1) {
      this.subs1.unsubscribe();
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

  loadFormData(): void {
    this.userService.getDataByID(this.id).subscribe(
      (res) => {
        this.userForm.get('role_name').setValue(res.data.role_name);
        this.currentRoleID = res.data.role_id;
        this.selectMode = "private";

        this.userForm.patchValue({
          role_id: res.data.role_id,
          province_id: res.data.province_id,
          regency_id: res.data.regency_id,
          subdistrict_id: res.data.subdistrict_id,
          urbanvillage_id: res.data.urbanvillage_id,
          name: res.data.name,
          username: res.data.username,
          email: res.data.email,
          phone: res.data.phone,
          nik: res.data.nik,
          nip: res.data.nip,
          pob: res.data.pob,
          dob: res.data.dob,
          gender: res.data.gender,
          role_name: res.data.role_name,
          address: res.data.address,
          is_active: res.data.is_active,
          is_complete: res.data.is_complete,
          is_verified: res.data.is_verified,
        });

        console.log(this.userForm.value);
      }
    );
  }

  doSave(): void {
    Swal.fire({
      text: "Simpan " + this.activeLabel + " ?",
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Yes",
      cancelButtonText: "No"
    }).then((result) => {
      if (result.isConfirmed) {
        if (this.id) {
          this.userService.updateData(this.id, this.userForm.value).subscribe({
            next: res => {
              if (res.status == 200) {
                this.userService.toggleVisible();
                this.userService.triggerLoadData();
              } else {
                Swal.fire({
                  text: res.message,
                  icon: "warning"
                })
              }
            },
            error: err => {
              Swal.fire({
                text: err.error.message.error,
                icon: "warning"
              })
            } 
          });
        } else {
          this.userService.createData(this.userForm.value).subscribe({
            next: res => {
              if (res.status == 200) {
                this.userService.toggleVisible();
                this.userService.triggerLoadData();
              } else {
                Swal.fire({
                  text: res.message,
                  icon: "warning"
                })
              }
            },
            error: err => {
              Swal.fire({
                text: err.error.message.error,
                icon: "warning"
              })
            } 
          });
        }
      }
    });
  }

  doCancel(): void {
    this.userService.toggleVisible();
  }
}
