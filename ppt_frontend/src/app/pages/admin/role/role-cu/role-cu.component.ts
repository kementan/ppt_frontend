import { Component, OnInit, OnDestroy } from '@angular/core';
import { RoleService } from "../role.service";
import { Subscription } from 'rxjs';

const Swal = require('sweetalert2')

@Component({
  selector: 'app-role-cu',
  templateUrl: './role-cu.component.html',
  styleUrls: ['./role-cu.component.scss']
})
export class RoleCuComponent implements OnInit, OnDestroy {
  activeLabel: string;
  id: string;
  form: any = {
    name: null,
    is_create: false,
    is_read: false,
    is_update: false,
    is_delete: false,
    is_public: false,
  }
  private subs1: Subscription;

  constructor(private roleService: RoleService) { }

  ngOnInit(): void {
    this.roleService.getLabel().subscribe((label) => {
      this.activeLabel = label;
    });

    this.subs1 = this.roleService.getID().subscribe((id) => {
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

  loadFormData(): void {
    this.roleService.getDataByID(this.id).subscribe(
      (res) => {
        console.log(res);
        this.form.name = res.data.name;
        this.form.is_create = res.data.is_create;
        this.form.is_read = res.data.is_read;
        this.form.is_update = res.data.is_update;
        this.form.is_delete = res.data.is_delete;
        this.form.is_public = res.data.is_public;
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
          this.roleService.updateData(this.id, this.form).subscribe({
            next: res => {
              if (res.status == 200) {
                this.roleService.toggleVisible();
                this.roleService.triggerLoadData();
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
          this.roleService.createData(this.form).subscribe({
            next: res => {
              if (res.status == 200) {
                this.roleService.toggleVisible();
                this.roleService.triggerLoadData();
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
    this.roleService.toggleVisible();
  }
}
