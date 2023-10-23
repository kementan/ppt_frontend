// menu-cu.component.ts
import { Component, OnInit, OnDestroy } from '@angular/core';
import { MenuService } from "../menu.service";
import { Subscription } from 'rxjs';

const Swal = require('sweetalert2')

@Component({
  selector: 'app-menu-cu',
  templateUrl: './menu-cu.component.html',
  styleUrls: ['./menu-cu.component.scss'],
})
export class MenuCuComponent implements OnInit, OnDestroy {
  activeLabel: string;
  labelBadge: string = "success";
  id: string;
  form: any = {
    name: null,
    slug: null,
    sort: null,
    is_active: true,
  }
  subs1 : Subscription;

  constructor(private menuService: MenuService) { }

  ngOnInit(): void {
    this.menuService.getLabel().subscribe((label) => {
      this.activeLabel = label;
      if (label == "Data Baru") {
        this.labelBadge = "success";
      } else {
        this.labelBadge = "info";
      }
    });

    this.subs1 = this.menuService.getID().subscribe((id) => {
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
    this.menuService.getDataByID(this.id).subscribe(
      (res) => {
        this.form.name = res.data.name;
        this.form.slug = res.data.slug;
        this.form.sort = res.data.sort;
        this.form.is_active = res.data.is_active;
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
          this.menuService.updateData(this.id, this.form).subscribe({
            next: res => {
              if (res.status == 200) {
                this.menuService.toggleVisible();
                this.menuService.triggerLoadData();
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
          this.menuService.createData(this.form).subscribe({
            next: res => {
              if (res.status == 200) {
                this.menuService.toggleVisible();
                this.menuService.triggerLoadData();
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
    this.menuService.toggleVisible();
  }
}
